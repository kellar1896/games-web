import react, { useCallback, useMemo, useState } from "react";
import FormGameCard from "../components/organisms/form-game-card";
import GamesTable from "../components/molecules/games-table";
import { Game, GameHeader } from "../models/games";
import useFetchGames from "../hooks/useFetchGames";
import { GameServices } from "../services/game.Services";
import LoadingPage from "../components/atoms/loading-page";
import ButtonStyled from "../components/atoms/button-styled";
import ConfirmationButtonSelector from "../components/molecules/confirmation-buttons-selector";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import ModalStyled from "../components/templates/modal-styled";

const headers = ["name", "description", 'category' ,"creationDate"] as GameHeader[];
const options = [
  "Sandbox",
  "Real-time strategy (RTS)",
  "MOBA",
  "Role-playing RPG",
  "First-person shooter (FPS)",
  "Third-person shooter (TPS)",
  "Board Game",
  "Card Game",
];

const Games = () => {
  const { games, isLoading, error, fetchGames } = useFetchGames();
  const [selectedGame, setSelectedGame] = useState(null as null | Game);
  const [formGame, setFormGame] = useState({} as Game);
  const gameServices = useMemo(() => new GameServices(), []);
  const [isLoadingForm, setLoadingForm] = useState(false);
  const [errorForm, setErrorForm] = useState(null as null | string);
  const [isConfirmCancelVisible, setIsConfirmCancelVisible] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showSelectedGame = useCallback((game: Game) => {
    console.log(`Selected game: ${JSON.stringify(game)}`);
    setSelectedGame(game);
    setFormGame(game);
  }, []);

  const handleForm = useCallback(
    (
      e:
        | react.ChangeEvent<HTMLInputElement>
        | react.ChangeEvent<HTMLTextAreaElement>
        | React.ChangeEvent<HTMLSelectElement>
    ) => {
      e.preventDefault();
      setFormGame({
        ...formGame,
        [e.target.name]: e.target.value,
      } as Game);
    },
    [formGame]
  );

  const validateForm = useCallback((data: Game) => {
    if (!data.name) {
      return "Name is required";
    }
    if (!data.description) {
      return "Description is required";
    }
    if (!data.category) {
      return "Category is required";
    }
    return null;
  },[])

  const onSubmit = useCallback(
    async (event: react.FormEvent<HTMLFormElement>, type: "update" | "create") => {
      event.preventDefault();
      const errorValidation = validateForm(formGame)
      setErrorForm(errorValidation)
      if(errorValidation === null){
        setLoadingForm(true);
        try {
          if(type === "create") {
            await gameServices.createGame(formGame)
          }else if(type === 'update'){
            await gameServices.updateGame(formGame.id, formGame)
          }
          fetchGames();
          setLoadingForm(false);
          setSelectedGame(null);
          setIsModalVisible(false);
        } catch (error) {
          alert("could't update game try again");
          setLoadingForm(false);
        }
      }
    },
    [fetchGames, formGame, gameServices, validateForm]
  );

  const deleteGame = useCallback(async()=>{
    if(selectedGame){
      try {
        await gameServices.deleteGame(selectedGame.id)
        fetchGames()
        setSelectedGame(null)
        setFormGame({} as Game)
        setIsConfirmCancelVisible(false)
      } catch (error) {
        alert("could't delete game try again")
      }
    }
  },[fetchGames, gameServices, selectedGame])

  const openModal = useCallback(() => {
    setIsModalVisible(true);
    setFormGame({} as Game);
    setSelectedGame(null);
  }, []);

  if (isLoading) {
    return <LoadingPage />;
  }

  if (error) {
    return <div>{`Error: ${error}`}</div>;
  }

  return (
    <div className="p-2 md:p-10 flex flex-col">
      <ButtonStyled className="w-full md:w-44 self-end my-2" onClick={openModal}>
        New Game
      </ButtonStyled>
      <GamesTable
        headers={headers}
        data={games}
        onEditGame={showSelectedGame}
      />
      {selectedGame && (
        <div className="my-5 bg-gray-500 w-full rounded-lg p-5 md:w-5/12 flex flex-col">
          {isConfirmCancelVisible ? (
            <ConfirmationButtonSelector
              className="self-end"
              onCancel={() => setIsConfirmCancelVisible(false)}
              onConfirm={deleteGame}
            />
          ) : (
            <ButtonStyled
              onClick={() => setIsConfirmCancelVisible(true)}
              className="w-full md:w-32 self-end"
            >
              <FontAwesomeIcon icon={solid("trash")} />
            </ButtonStyled>
          )}
          <FormGameCard
            game={formGame}
            onSubmit={(e)=>onSubmit(e,'update')}
            handleForm={handleForm}
            gameOptions={options}
            isLoading={isLoadingForm}
            errorForm={errorForm}
          />
        </div>
      )}
      <ModalStyled isOpen={isModalVisible}>
        <div className="bg-transparent flex flex-col">
          <button className="self-end" onClick={() => setIsModalVisible(false)}>
            <FontAwesomeIcon icon={solid("xmark")} />
          </button>
          <FormGameCard
            game={formGame}
            onSubmit={(e)=>onSubmit(e,'create')}
            handleForm={handleForm}
            gameOptions={options}
            isLoading={isLoadingForm}
            errorForm={errorForm}
            className="text-raisingBlack"
          />
        </div>
      </ModalStyled>
    </div>
  );
};

export default Games;

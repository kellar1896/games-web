import react, { useCallback, useEffect, useMemo, useState } from "react";
import EditGameCard from "../components/organisms/form-game-card";
import GamesTable from "../components/molecules/games-table";
import { Game, GameHeader } from "../models/games";
import useFetchGames from "../hooks/useFetchGames";
import { GameServices } from "../services/game.Services";
import LoadingPage from "../components/atoms/loading-page";
import ButtonStyled from "../components/atoms/button-styled";

const headers = ["name", "description", "creationDate"] as GameHeader[];

const Games = () => {
  const { games, isLoading, error } = useFetchGames();
  const [selectedGame, setSelectedGame] = useState(null as null | Game);
  const [formGame, setFormGame] = useState(null as null | Game);
  const gameServices = useMemo(() => new GameServices(), []);

  const showSelectedGame = useCallback((game: Game) => {
    console.log(`Selected game: ${JSON.stringify(game)}`);
    setSelectedGame(game);
    setFormGame(game);
  }, []);

  const handleForm = useCallback(
    (e: react.ChangeEvent<HTMLInputElement> | react.ChangeEvent<HTMLTextAreaElement>) => {
      e.preventDefault();
      setFormGame({
        ...formGame,
        [e.target.name]: e.target.value,
      } as Game);
    },
    [formGame]
  );

  const onSubmit = useCallback(
    (event: react.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      console.log(`Form game: ${JSON.stringify(formGame)}`);
      // put new form
    },
    [formGame]
  );


  if (isLoading) {
    return <LoadingPage />;
  }

  if (error) {
    return <div>{`Error: ${error}`}</div>;
  }

  return (
    <div className="p-2 md:p-10 flex flex-col">
      <ButtonStyled
        className="w-full md:w-44 self-end my-2"
        onClick={()=>{}}
      >
        New Game
      </ButtonStyled>
      <GamesTable
        headers={headers}
        data={games}
        onEditGame={showSelectedGame}
      />
      {selectedGame && (
        <div className="my-5 bg-gray-500 w-full rounded-lg p-5 md:w-5/12">
          <EditGameCard
            game={selectedGame}
            onSubmit={onSubmit}
            handleForm={handleForm}
          />
        </div>
      )}
    </div>
  );
};

export default Games;

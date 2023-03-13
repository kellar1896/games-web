import react, { useCallback, useState } from "react";
import EditGameCard from "../components/organisms/edit-game-card";
import GamesTable from "../components/molecules/games-table";
import { Game, GameHeader } from "../models/games";
import useFetchGames from "../hooks/useFetchGames";

const headers = ["id", "name", "description", "creationDate"] as GameHeader[];

const Games = () => {
  const {games, isLoading, error } = useFetchGames();
  const [selectedGame, setSelectedGame] = useState(null as null | Game);
  const [formGame, setFormGame] = useState(null as null | Game);


  const showSelectedGame = useCallback((game: Game) => {
    console.log(`Selected game: ${JSON.stringify(game)}`);
    setSelectedGame(game);
    setFormGame(game);
  }, []);

  const handleForm = useCallback(
    (e: react.ChangeEvent<HTMLInputElement>) => {
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
    return <div>Loading...</div>;
  }

  if (error) {
    return (
      <div>
        {`Error: ${error}`}
      </div>
    );
  }

  return (
    <div className="p-2 md:p-10">
      <GamesTable
        headers={headers}
        data={games}
        onEditGame={showSelectedGame}
      />
      {selectedGame && (
        <div className="my-5">
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

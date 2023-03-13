import { useEffect, useMemo, useState } from "react";
import { Game } from "../models/games";
import { GameServices } from "../services/game.Services";

const useFetchGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null as null | unknown);
  const gamesServices = useMemo(() => new GameServices(), []);

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const data = await gamesServices.fetchGames();
        setGames(data);
        setIsLoading(false);
      } catch (error) {
        setError(error);
        setIsLoading(false);
      }
    };
    fetchGames();
  }, [gamesServices]);

  return { games, isLoading, error };
};

export default useFetchGames;

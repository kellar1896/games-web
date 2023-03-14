import { useCallback, useEffect, useMemo, useState } from "react";
import { Game } from "../models/games";
import { GameServices } from "../services/game.Services";

const useFetchGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null as null | unknown);
  const gamesServices = useMemo(() => new GameServices(), []);

  const fetchGames = useCallback(async () => {
    try {
      const data = await gamesServices.fetchGames();
      setGames(data);
      setIsLoading(false);
    } catch (error) {
      setError(error);
      setIsLoading(false);
    }
  },[gamesServices])

  useEffect(() => {
    fetchGames();
  }, [fetchGames]);

  return { games, isLoading, error, fetchGames };
};

export default useFetchGames;

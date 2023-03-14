import moment from "moment";
import { Game } from "../models/games";
import { createId } from "../utils/tools";
import { HttpClient } from "./httpClient";

export class GameServices {
    httpClient = new HttpClient();

    fetchGames = async () => { 
        try {
            const response = await this.httpClient.get("/games");
            return response as Game[];
          } catch (error) {
            console.log(`Error ${error}`);
            throw new Error("Unable to fetch game data");
          } 
    }

    updateGame = async (gameId: string, game: Game) => {
        try {
            const response = await this.httpClient.put(`/games/${gameId}`, game);
            return response;
          } catch (error) {
            console.log(`Error ${error}`);
            throw new Error("Unable to update game data");
          } 
    }

    createGame = async (game: Game) => {
        try {
            const response = await this.httpClient.post("/games", {...game, id: createId(), creationDate: moment().toISOString()});
            return response;
          } catch (error) {
            console.log(`Error ${error}`);
            throw new Error("Unable to create game data");
          } 
    }

    deleteGame = async (gameId: string) => {
        try {
            const response = await this.httpClient.delete(`/games/${gameId}`);
            return response;
          } catch (error) {
            console.log(`Error ${error}`);
            throw new Error("Unable to delete game data");
          } 
    }
}
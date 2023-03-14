import { Game, GameConfiguration } from "../models/games";
import { HttpClient } from "./httpClient";

export class GameServices {
    httpClient = new HttpClient();

    fetchGames = async () => { 
        try {
            const response = await this.httpClient.get("/games");
            return response as Game[];
          } catch (error) {
            console.log(`Error ${error}`);
            throw new Error("Unable to fetch user data");
          } 
    }

    fetchGameConfiguration = async (id: number) => {
      try {
        const response = await this.httpClient.get(`/game_configurations/${id}`);
        return response as GameConfiguration;
      } catch (error) {
        console.log(`Error ${error}`);
        throw new Error("Unable to fetch user data");
      }
    }
}
import { Game } from "../models/games";
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
}
import { User } from "../models/users";
import { HttpClient } from "./httpClient";

export class UserServices {
    httpClient = new HttpClient();
    
    fetchUsers = async () => {
        try {
            const response = await this.httpClient.get("/users");
            return response as User[];
        } catch (error) {
            console.log(`Error ${error}`);
            throw new Error("Unable to fetch user data");
        }
    }
}
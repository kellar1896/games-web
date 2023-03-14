import { User } from "../models/users";
import { createId } from "../utils/tools";
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
  };

  updateUser = async (userId: string, user: User) => {
    try {
      const response = await this.httpClient.put(`/users/${userId}`, user);
      return response as User;
    } catch (error) {
      console.log(`Error ${error}`);
      throw new Error("Unable to update user data");
    }
  };

  createUser = async (user: User) => {
    try {
      const response = await this.httpClient.post("/users", {
        ...user,
        id: createId(),
      });
      return response as User;
    } catch (error) {
      console.log(`Error ${error}`);
      throw new Error("Unable to create user data");
    }
  };

  deleteUser = async (userId: string) => {
    try {
      const response = await this.httpClient.delete(`/users/${userId}`);
      return response as User;
    } catch (error) {
      console.log(`Error ${error}`);
      throw new Error("Unable to delete user data");
    }
  }
}

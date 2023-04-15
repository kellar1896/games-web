import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { User } from "../../models/users";
import { UserServices } from "../../services/user.Services";
import { RootState } from "../../app/store";

export interface UsersState {
  users: User[];
  status: "idle" | "loading" | "failed";
}

const initialState: UsersState = {
  users: [],
  status: "idle",
};

const userServices = new UserServices();

export const loadUsers = createAsyncThunk("users/getAllUsers", async () => {
  const users = await userServices.fetchUsers();
  return users;
});


export const usersSlice = createSlice({
  initialState: initialState,
  name: "users",
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadUsers.pending, (state) => {
        state.status = "loading";
      })
      .addCase(loadUsers.fulfilled, (state, action) => {
        state.status = "idle";
        state.users = action.payload;
      })
      .addCase(loadUsers.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export const selectAllUsers = (state: RootState) => state.users.users;

 
export default usersSlice.reducer;
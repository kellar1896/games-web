import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { User } from "../../models/users";
import { UserServices } from "../../services/user.Services";
import { AppThunk, RootState } from "../../app/store";

export interface UsersState {
  users: User[];
  status: "idle" | "loading" | "failed";
  selectedUser: null | User;
}

const initialState: UsersState = {
  users: [],
  status: "idle",
  selectedUser: null,
};

const userServices = new UserServices();

export const loadUsers = createAsyncThunk("users/getAllUsers", async () => {
  const users = await userServices.fetchUsers();
  return users;
});

export const usersSlice = createSlice({
  initialState: initialState,
  name: "users",
  reducers: {
    deleteUser: (state, action: PayloadAction<string>) => {
      state.users = state.users.filter((user) => user.id !== action.payload);
    },
    addUser: (state, action: PayloadAction<User>) => {
      state.users.push(action.payload);
    },
    updateUser: (state, action: PayloadAction<User>) => {
      const userIndex = state.users.findIndex(
        (user) => user.id === action.payload.id
      );
      state.users[userIndex] = action.payload;
    },
    setUserSelected: (state, action: PayloadAction<User>) => {
        state.selectedUser = action.payload;
    },
    removeUserSelected: (state)=> {
        state.selectedUser = null;
    }
  },
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

const { deleteUser, addUser, updateUser } = usersSlice.actions;

export const removeUser =
(userId: string): AppThunk =>
async (dispatch, _) => {
    try {
        await userServices.deleteUser(userId);
        dispatch(deleteUser(userId));
    } catch (error) {
        // we should dispatch error action
    }
};

export const createUser =
(user: User): AppThunk =>
async (dispatch, _) => {
    try {
        const newUser = await userServices.createUser(user);
        dispatch(addUser(newUser));
    } catch (error) {
        // we should dispatch error action
    }
};

export const editUser =
(user: User): AppThunk =>
async (dispatch, _) => {
    try {
        const updatedUser = await userServices.updateUser(user.id, user);
        dispatch(updateUser(updatedUser));
    } catch (error) {
        // we should dispatch error action
    }
};

export const {removeUserSelected, setUserSelected} = usersSlice.actions
export const selectAllUsers = (state: RootState) => state.users.users;
export default usersSlice.reducer;

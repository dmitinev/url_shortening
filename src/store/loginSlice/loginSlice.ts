import { PayloadAction, createSlice } from '@reduxjs/toolkit';

type User = {
  email: string;
  password: string;
};
interface LoginState {
  users: User[];
  isAuth: boolean;
}

const initialState: LoginState = {
  isAuth: false,
  users: [],
};

const loginSlice = createSlice({
  name: '@@login',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<User>) => {
      if (
        state.users.some(
          ({ email, password }) =>
            email === action.payload.email &&
            password === action.payload.password,
        )
      ) {
        state.isAuth = true;
      } else {
        state.users.push(action.payload);
        state.isAuth = true;
      }
    },
    logout: (state) => {
      state.isAuth = false;
    },
  },
});

export const { login, logout } = loginSlice.actions;
export default loginSlice.reducer;


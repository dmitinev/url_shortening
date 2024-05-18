import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../store';

const selected = (state: RootState) => state;

export const loginSelector = createSelector(selected, (state) => ({
  isAuth: state.users.isAuth,
  users: state.users.users,
}));


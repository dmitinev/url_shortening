import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../store';

const selected = (state: RootState) => state;

export const urlsSelector = createSelector(selected, (state) => ({
  status: state.links.loadingStatus,
  urls: state.links.urls,
}));


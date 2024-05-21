import { createSlice } from '@reduxjs/toolkit';
import { Url } from 'src/types/types';
import { shortUrl } from './urlAction';

export type LoadingState = 'idle' | 'loading' | 'succeeded' | 'failed';
type Error = string | null;

interface IUrlState {
  loadingStatus: LoadingState;
  urls: Url[];
  error: Error;
}

const initialState: IUrlState = {
  loadingStatus: 'idle',
  urls: [],
  error: null,
};

const UrlSlice = createSlice({
  name: '@@url',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(shortUrl.pending, (state) => {
        state.loadingStatus = 'loading';
      })
      .addCase(shortUrl.fulfilled, (state, action) => {
        state.loadingStatus = 'succeeded';
        if (
          !state.urls.some((url) => url.shortUrl === action.payload.shortUrl)
        ) {
          state.urls.push(action.payload);
        } else {
          return;
        }
      })
      .addCase(shortUrl.rejected, (state, action) => {
        state.loadingStatus = 'failed';
        state.error = action.payload ?? 'An error occurred';
      });
  },
});

export default UrlSlice.reducer;


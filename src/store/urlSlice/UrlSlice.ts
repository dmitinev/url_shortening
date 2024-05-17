import { createSlice } from '@reduxjs/toolkit';
import { Url } from 'src/types/types';

type LoadingState = 'idle' | 'loading' | 'succeeded' | 'failed';
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
  extraReducers: () => {},
});

export default UrlSlice.reducer;


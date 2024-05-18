import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosRequestConfig } from 'axios';
import { API_URL } from 'src/Config.ts';
import { Extra } from 'src/types/extra';
import { IApiResponse, Url } from 'src/types/types';
import { RootState } from '../store';

const axiosConfig: AxiosRequestConfig = {
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
    'X-RapidAPI-Key': import.meta.env.VITE_API_KEY as string,
    'X-RapidAPI-Host': 'url-shortener-service.p.rapidapi.com',
  },
};

export const shortUrl = createAsyncThunk<
  Url,
  string,
  { state: RootState; rejectValue: string; extra: Extra }
>('@@url/shortUrl', async (originalUrl, { rejectWithValue, extra }) => {
  try {
    const { data } = await extra.client.post<IApiResponse>(
      API_URL,
      { url: originalUrl },
      axiosConfig,
    );

    return { originalUrl: originalUrl, shortUrl: data.result_url };
  } catch (error) {
    if (error instanceof Error) return rejectWithValue(error.message);
    throw error;
  }
});

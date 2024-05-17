import { createAsyncThunk } from '@reduxjs/toolkit';
import { API_URL } from 'src/Config.ts';
import { Extra } from 'src/types/extra';
import { Url } from 'src/types/types';
import { RootState } from '../store';

export const shortUrl = createAsyncThunk<
  Url,
  string,
  { state: RootState; rejectValue: string; extra: Extra }
>('@@url/shortUrl', async (originalUrl, { rejectWithValue, extra }) => {
  try {
    const { data } = await extra.client.request({
      method: 'POST',
      url: API_URL,
      data: { url: originalUrl },
    });

    return { originalUrl: originalUrl, shortUrl: data.result_url };
  } catch (error) {
    if (error instanceof Error) return rejectWithValue(error.message);
    throw error;
  }
});

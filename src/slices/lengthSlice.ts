import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { LengthInitialState } from './types';
import { Params } from '../common.types.ts/types';
import { AxiosRequestConfig } from 'axios';
import { getData } from '../services/getData';

// Этот slice нужен, чтобы понять сколько всего страниц будет для пагинации. Это необходимо, т. к. в API нет функции подсчёта количества постов
export const fetchLength = createAsyncThunk('length/fetchLengthData', async (params: AxiosRequestConfig<Params>) => {
  const response = await getData.request('/posts', 'GET', null, params);
  return response?.data.length;
});

const initialState: LengthInitialState = {
  postsAmount: 0,
  status: 'loading',
};

export const lengthSlice = createSlice({
  name: 'postsAmount',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchLength.pending, (state) => {
      state.postsAmount = 0;
      state.status = 'loading';
    });
    builder.addCase(fetchLength.fulfilled, (state, action: PayloadAction<number>) => {
      state.postsAmount = action.payload;
      state.status = 'idle';
    });
    builder.addCase(fetchLength.rejected, (state) => {
      state.status = 'error';
    });
  },
});

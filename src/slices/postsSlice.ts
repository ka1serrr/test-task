import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { PostsInitialState } from './types';
import { getData } from '../services/getData';
import { Params } from '../common.types.ts/types';
import { AxiosRequestConfig } from 'axios';

export const fetchPosts = createAsyncThunk('posts/fetchPostsData', async (params: AxiosRequestConfig<Params>) => {
  const response = await getData.request('/posts', 'GET', null, params);
  return response?.data;
});

const initialState: PostsInitialState = {
  posts: [],
  status: 'loading',
  errorMessage: null,
  page: 1,
};

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    incrementPage: (state) => {
      state.page += 1;
    },
    decremetPage: (state) => {
      state.page -= 1;
    },
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
  },
  extraReducers: (builder) => {
    // Получение постов
    builder.addCase(fetchPosts.pending, (state) => {
      state.errorMessage = null;
      state.posts = [];
      state.status = 'loading';
    });
    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      state.errorMessage = null;
      state.posts = action.payload;
      state.status = 'idle';
    });
    builder.addCase(fetchPosts.rejected, (state, action) => {
      state.errorMessage = action.error?.message;
      state.posts = [];
      state.status = 'error';
    });
  },
});

export const { incrementPage, decremetPage, setPage } = postsSlice.actions;

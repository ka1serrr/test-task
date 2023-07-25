import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { postsSlice } from '../slices/postsSlice';
import { lengthSlice } from '../slices/lengthSlice';

const rootReducer = combineReducers({
  posts: postsSlice.reducer,
  postsAmount: lengthSlice.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export type AppDispatch = typeof store.dispatch;
export type TypeRootState = ReturnType<typeof rootReducer>;

import { Post, Status } from '../common.types.ts/types';

export interface PostsInitialState {
  posts: Post[];
  status: Status;
  errorMessage: string | null | undefined;
  page: number;
}

export interface LengthInitialState {
  postsAmount: number;
  status: Status;
}

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import type { IPost, IState } from '@/types/app-types';

const initialState: IState = {
  posts: [],
};

export const postSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    listsOfPost: (state, action: PayloadAction<Array<IPost>>) => {
      state.posts = action.payload;
    },
    addPost: (state, action: PayloadAction<IPost>) => {
      state.posts = [...state.posts, action.payload];
    },
    deletePost: (state, action: PayloadAction<number>) => {
      state.posts = state.posts.filter(post => post.id !== action.payload);
    },
    filterPosts: (state, action: PayloadAction<string>) => {
      state.posts = state.posts.filter(post => post.name.match(new RegExp(action.payload, 'i')));
    },
  },
});

export const { addPost, listsOfPost, deletePost, filterPosts } = postSlice.actions;

export default postSlice.reducer;

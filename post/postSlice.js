import { createSlice } from "@reduxjs/toolkit";

const postSlice = createSlice({
  name: "posts",
  initialState: {
    posts: [],
  },
  reducers: {
    changePostArray: (state, { payload }) => {
      console.log("payload :>> ", payload);
      return (state.posts = [payload, ...state.posts]);
    },
  },
});

export const postReducer = postSlice.reducer;
export const { changeFilter } = postSlice.actions;

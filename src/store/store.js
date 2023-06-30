import { configureStore } from "@reduxjs/toolkit";
import { postReducer } from "./post/postSlice";

const reducer = {
  posts: postReducer,
};

export const store = configureStore({ reducer });

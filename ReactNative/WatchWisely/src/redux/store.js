import { configureStore } from "@reduxjs/toolkit";
import { categorySlice } from "./slice/catagorySlice";
import { moviesSlice } from "./slice/movieSlice";

export const store = configureStore({
  reducer: {
    category: categorySlice.reducer,
    movies: moviesSlice.reducer,
  },
});

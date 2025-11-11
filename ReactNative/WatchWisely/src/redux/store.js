import { configureStore } from "@reduxjs/toolkit";
import { categorySlice } from "./slice/catagorySlice";
import { moviesSlice } from "./slice/movieSlice";
import { searchSlice } from "./slice/searchSlice";

export const store = configureStore({
  reducer: {
    category: categorySlice.reducer,
    movies: moviesSlice.reducer,
    search: searchSlice.reducer
  },
});

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    movies: [],
    status: "idle",
    error: null,
}

export const fetchMovies = createAsyncThunk("movies/fetchMovies", async (page) => {
    const response = await axios.get(`http://localhost:3000/categories/movies/pages/${page}`);
    return response.data;
});

export const moviesSlice = createSlice({
    name: "movies",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchMovies.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchMovies.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.movies = action.payload;
            })
            .addCase(fetchMovies.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            })
    }
});

export const selectMovies = (state) => state.movies.movies;
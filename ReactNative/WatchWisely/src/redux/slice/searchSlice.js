import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import Constants from "expo-constants";

const { TMDB_TOKEN } = Constants.expoConfig?.extra

export const fetchSearch = createAsyncThunk(
    "movies/search",
    async (query) => {
        // GET REQUEST OPTIONS
        const options = {
            method: 'GET',
            url: `https://api.themoviedb.org/3/search/movie?query=${query}`,
            headers: {
                accept: 'application/json',
                Authorization: `Bearer ${TMDB_TOKEN}`
            }
        };
        // GET REQUEST
        try {
            const response = await axios(options);
            // console.log(JSON.stringify(response.data, null, 2));
            // console.log(JSON.stringify(response.data.results, null, 2));
            return response?.data?.results
        } catch (error) {
            console.log(error)
            throw error
        }
    })

export const searchSlice = createSlice({
    name: "search",
    initialState: {
        data: [],
        status: "idle",
        error: null
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchSearch.pending, (state) => {
                state.status = "loading"
            })
            .addCase(fetchSearch.fulfilled, (state, action) => {
                state.status = "succeeded"
                state.data = action.payload
            })
            .addCase(fetchSearch.rejected, (state, action) => {
                state.status = "failed"
                state.error = action.payload
            })
    }
})

export const selectSearch = (state) => state.search
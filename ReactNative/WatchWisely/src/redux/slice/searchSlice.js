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

// export const fetchSearchSuggestions = createAsyncThunk(
//     "movies/suggestions",
//     async (query) => {
//         // GET REQUEST OPTIONS
//         const options = {
//             method: 'GET',
//             url: `https://api.themoviedb.org/3/search/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&query=${query}`,
//             headers: {
//                 accept: 'application/json',
//                 Authorization: `Bearer ${TMDB_TOKEN}`
//             }
//         };
//         // GET REQUEST
//         try {
//             const response = await axios(options);
//             // console.log(JSON.stringify(response.data, null, 2));
//             // console.log(JSON.stringify(response.data.results, null, 2));
//             return response?.data?.results
//         } catch (error) {
//             console.log(error)
//             throw error
//         }
//     })

export const searchSlice = createSlice({
    name: "search",
    initialState: {
        search: [],
        searchStatus: "idle",
        searchError: null,
        // suggestions: [],
        // suggestionsStatus: "idle",
        // suggestionsError: null,
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchSearch.pending, (state) => {
                state.searchStatus = "loading"
            })
            .addCase(fetchSearch.fulfilled, (state, action) => {
                state.searchStatus = "succeeded"
                state.search = action.payload
            })
            .addCase(fetchSearch.rejected, (state, action) => {
                state.searchStatus = "failed"
                state.searchError = action.payload
            })
        // .addCase(fetchSearchSuggestions.pending, (state) => {
        //     state.suggestionsStatus = "loading"
        // })
        // .addCase(fetchSearchSuggestions.fulfilled, (state, action) => {
        //     state.suggestionsStatus = "succeeded"
        //     state.suggestions = action.payload
        // })
        // .addCase(fetchSearchSuggestions.rejected, (state, action) => {
        //     state.suggestionsStatus = "failed"
        //     state.suggestionsError = action.payload
        // })
    }
})

export const selectSearch = (state) => state.search
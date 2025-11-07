import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import Constants from "expo-constants";

const TMDB_TOKEN = Constants.expoConfig?.extra?.TMDB_TOKEN

export const fetchTopRatedMovies = createAsyncThunk(
    "movie/fetchTopRatedMovies",
    async (_, { rejectWithValue }) => {
        try {
            // Debug logging
            // console.log("🔍 Starting API request...");
            // console.log("🔑 Token exists:", !!TMDB_TOKEN);
            // console.log("🌐 URL: https://api.themoviedb.org/3/movie/popular?language=en-US&page=1");
            
            const response = await axios.get(
                `https://api.themoviedb.org/3/movie/top_rated`,
                {
                    headers: {
                        Authorization: `Bearer ${TMDB_TOKEN}`,
                        'Content-Type': 'application/json',
                    },
                    timeout: 30000, // 30 seconds timeout
                    validateStatus: function (status) {
                        return status >= 200 && status < 300; // default
                    },
                }
            );

            // console.log("✅ API Success - Status:", response.status);
            // console.log("📦 Response data keys:", Object.keys(response.data));
            
            return response.data;
        } catch (error) {
            // Comprehensive error logging
            const errorDetails = {
                message: error.message,
                code: error.code,
                response: error.response ? {
                    status: error.response.status,
                    statusText: error.response.statusText,
                    data: error.response.data,
                } : null,
                request: error.request ? {
                    method: error.config?.method,
                    url: error.config?.url,
                } : null,
            };
            
            console.error("❌ API Error Details:", JSON.stringify(errorDetails, null, 2));
            
            // Check for specific error types
            if (error.code === 'ECONNABORTED') {
                console.error("⏱️ Request timeout - VPN might be slow or disconnected");
            } else if (error.code === 'ENOTFOUND' || error.code === 'ECONNREFUSED') {
                console.error("🌐 Network error - Check VPN connection");
            } else if (error.response?.status === 401) {
                console.error("🔐 Unauthorized - Check your TMDB token");
            } else if (error.response?.status === 403) {
                console.error("🚫 Forbidden - API might be blocked");
            }
            
            return rejectWithValue(errorDetails);
        }
    }
);

export const moviesSlice = createSlice({
    name: "movies",
    initialState: {
        data: [],
        status: "idle",
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchTopRatedMovies.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchTopRatedMovies.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.data = action.payload;
            })
            .addCase(fetchTopRatedMovies.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.payload || action.error.message;
                // console.error("Redux Error State:", JSON.stringify(state.error, null, 2));
            });
    },
});

export const selectMovies = (state) => state.movies;
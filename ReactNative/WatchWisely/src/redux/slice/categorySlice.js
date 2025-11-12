import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import getMetroHostIp from "../../utils/getLocalIp";

export const fetchCategory = createAsyncThunk(
  "movie/fetchCategory",
  async () => {
    const envBaseUrl = process.env.EXPO_PUBLIC_API_BASE_URL;
    let BASE_URL = envBaseUrl && envBaseUrl.length > 0 ? envBaseUrl : null;

    if (!BASE_URL && __DEV__) {
      const hostIp = getMetroHostIp();
      if (hostIp) {
        BASE_URL = `http://${hostIp}:3000`;
      }
    }

    const response = await axios.get(`${BASE_URL}/categories`);
    return response.data;
  }
);

export const categorySlice = createSlice({
  name: "category",
  initialState: {
    data: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategory.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCategory.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(fetchCategory.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});


export const selectCategory = (state) => state.category;
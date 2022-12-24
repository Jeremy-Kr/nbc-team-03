import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const name = "comments";

const initialState = {
  commentsData: [],
  isLoading: false,
  error: null,
};

export const getComments = createAsyncThunk(
  `${name}/getComments`,
  async (_, { fulfillWithValue, rejectWithValue }) => {
    try {
      const res = await axios.get("http://localhost:3001/comments");
      console.log(res.data);
      return fulfillWithValue(res.data);
    } catch (e) {
      return rejectWithValue(e);
    }
  }
);

export const postComments = createAsyncThunk(
  `${name}/postComments`,
  async (payload, { fulfillWithValue, rejectWithValue }) => {
    try {
      const res = await axios.post("http://localhost:3001/comments", payload);
      console.log(res.data);
      return fulfillWithValue(res.data);
    } catch (e) {
      return rejectWithValue(e);
    }
  }
);

const commentsSlice = createSlice({
  name,
  initialState,
  reducers: {},
  extraReducers: {
    [getComments.pending]: (state, action) => {
      state.isLoading = true;
    },
    [getComments.fulfilled]: (state, action) => {
      state.commentsData = action.payload;
      state.isLoading = false;
    },
    [getComments.rejected]: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
    [postComments.pending]: (state, action) => {
      state.isLoading = true;
    },
    [postComments.fulfilled]: (state, action) => {
      const newComments = [...state.commentsData, action.payload];
      state.commentsData = newComments;
      state.isLoading = false;
    },
    [postComments.rejected]: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
  },
});

const { reducer } = commentsSlice;

export default reducer;

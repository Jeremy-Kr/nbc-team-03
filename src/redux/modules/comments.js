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
      return fulfillWithValue(res.data);
    } catch (e) {
      return rejectWithValue(e);
    }
  }
);

export const deleteComment = createAsyncThunk(
  `${name}/deleteComment`,
  async (commentId, { fulfillWithValue, rejectWithValue }) => {
    try {
      await axios.delete(`http://localhost:3001/comments/${commentId}`);
      const res = await axios.get("http://localhost:3001/comments");
      return fulfillWithValue(res.data);
    } catch (e) {
      return rejectWithValue(e);
    }
  }
);

export const patchComment = createAsyncThunk(
  `${name}/patchComment`,
  async (
    { commentId, commentText, nickname },
    { fulfillWithValue, rejectWithValue }
  ) => {
    try {
      await axios.patch(`http://localhost:3001/comments/${commentId}`, {
        commentText,
        nickname,
      });
      const res = await axios.get("http://localhost:3001/comments");
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
    [deleteComment.pending]: (state, action) => {
      state.isLoading = true;
    },
    [deleteComment.fulfilled]: (state, action) => {
      state.commentsData = action.payload;
      state.isLoading = false;
    },
    [deleteComment.rejected]: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
    [patchComment.pending]: (state, action) => {
      state.isLoading = true;
    },
    [patchComment.fulfilled]: (state, action) => {
      state.commentsData = action.payload;
      state.isLoading = false;
    },
    [patchComment.rejected]: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
  },
});

const { reducer } = commentsSlice;

export default reducer;

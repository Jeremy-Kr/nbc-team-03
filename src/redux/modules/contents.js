import { createAsyncThunk, createSlice, nanoid } from "@reduxjs/toolkit";
import axios from "axios";

const name = "contents";

const initialState = {
  contentsData: [],
  isLoading: false,
  error: null,
};

export const postContent = createAsyncThunk(
  `${name}/postContent`,
  async (
    { nickname, password, contentTitle, contentWhy, contentHow, contentWhen },
    { fulfillWithValue, rejectWithValue }
  ) => {
    try {
      const res = await axios.post("http://localhost:3001/content", {
        id: nanoid(),
        nickname,
        password,
        contentTitle,
        contentWhy,
        contentHow,
        contentWhen,
        comments: [],
      });
      return fulfillWithValue(res.data);
    } catch (e) {
      return rejectWithValue(e);
    }
  }
);

const contentsSlice = createSlice({
  name: "contents",
  initialState,
  reducers: {},
  extraReducers: {
    [postContent.pending]: (state, action) => {
      state.isLoading = true;
    },
    [postContent.fulfilled]: (state, action) => {
      console.log([...state.contentsData], action.payload);
      state.isLoading = false;
    },
    [postContent.rejected]: (state, action) => {
      state.error = action.error;
      state.isLoading = false;
    },
  },
});

const { reducer } = contentsSlice;

export default reducer;

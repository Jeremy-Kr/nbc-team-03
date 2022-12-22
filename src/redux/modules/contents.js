import { createSlice } from "@reduxjs/toolkit";

const name = "contents";

const initialState = {
  contentsData: [],
  isLoading: false,
  error: null,
};

const contentsSlice = createSlice({
  name,
  initialState,
  reducers: {},
});

const { reducer } = contentsSlice;

export default reducer;

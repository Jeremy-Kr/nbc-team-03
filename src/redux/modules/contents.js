import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// const name = "contents";

const initialState = {
  contents: [],
  isLoading: false,
  error: null,
};

// 추가한 thunk함수 - 목록가져오기
export const __getContents = createAsyncThunk(
  "contents/getContents",
  async (payload, thunkAPI) => {
    try {
      const data = await axios.get("http://localhost:3001/content");
      return thunkAPI.fulfillWithValue(data.data);
      // fulfillWithValue = Promise에서 resolve된 경우(네트워크요청이 성공한경우) dispatch해주는 API
      // 인자로는 payload를 넣는다
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
      // rejectWithValue = Promise에서 rejected된 경우(네트워크요청이 실패한경우) dispatch해주는 API
    }
  }
);
// 추가한 thunk함수2 - 상세보기페이지
// export const __getContentById = createAsyncThunk(
//   "contents/getContentById",
//   async (payload, thunkAPI) => {
//     try {
//       const data = await axios.get("http://localhost:3001/content");
//       console.log("뜨니", data.data);
//       return thunkAPI.fulfillWithValue(
//         data.data.filter((item) => item.id === "2")
//       );
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error);
//     }
//   }
// );

const contentsSlice = createSlice({
  name: "contents",
  initialState,
  reducers: {},
  extraReducers: {
    [__getContents.pending]: (state) => {
      state.isLoading = true; // 네트워크 요청이 시작되면 로딩상태를 true로 변경합니다.
    },
    [__getContents.fulfilled]: (state, action) => {
      state.isLoading = false; // 네트워크 요청이 끝났으니, false로 변경합니다.
      state.contents = action.payload; // Store에 있는 contents에 서버에서 가져온 contents를 넣습니다.
    },
    [__getContents.rejected]: (state, action) => {
      state.isLoading = false; // 에러가 발생했지만, 네트워크 요청이 끝났으니, false로 변경합니다.
      state.error = action.payload; // catch 된 error 객체를 state.error에 넣습니다.
    },
  },
});

const { reducer } = contentsSlice;

export default reducer;

// export default contentsSlice.reducer;
// export const contentsActions = contentsSlice.actions;

import { createAsyncThunk, createSlice, nanoid } from "@reduxjs/toolkit";
import axios from "axios";

const name = "contents";

const initialState = {
  content: null,
  contents: [],
  isLoading: false,
  error: null,
};
// 글쓰기
export const postContent = createAsyncThunk(
  `${name}/postContent`,
  async (
    { nickname, password, contentTitle, contentWhy, contentHow, contentWhen },
    { fulfillWithValue, rejectWithValue }
  ) => {
    try {
      await axios.post(`${process.env.REACT_APP_SERVER_URL}/content`, {
        id: nanoid(),
        nickname,
        password,
        contentTitle,
        contentWhy,
        contentHow,
        contentWhen,
        createdDate: Date.now(),
      });
      const res = await axios.get(
        `${process.env.REACT_APP_SERVER_URL}/content?_sort=createdDate&_order=desc`
      );
      return fulfillWithValue(res.data);
    } catch (e) {
      return rejectWithValue(e);
    }
  }
);

export const searchContents = createAsyncThunk(
  "contents/searchContents",
  async (payload, thunkAPI) => {
    try {
      const data = await axios.get(
        `${process.env.REACT_APP_SERVER_URL}/content?${payload[0]}_like=${payload[1]}`
      );
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// 목록가져오기
export const __getContents = createAsyncThunk(
  "contents/getContents",
  async (_, thunkAPI) => {
    try {
      const data = await axios.get(
        `${process.env.REACT_APP_SERVER_URL}/content?_sort=createdDate&_order=desc`
      );
      return thunkAPI.fulfillWithValue(data.data);
      // fulfillWithValue = Promise에서 resolve된 경우(네트워크요청이 성공한경우) dispatch해주는 API
      // 인자로는 payload를 넣는다
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
      // rejectWithValue = Promise에서 rejected된 경우(네트워크요청이 실패한경우) dispatch해주는 API
    }
  }
);
// 선택한 글 가져오기
export const __getSelectedContent = createAsyncThunk(
  "contents/getSelectedContent",
  async (payload, thunkAPI) => {
    try {
      const data = await axios.get(
        `${process.env.REACT_APP_SERVER_URL}/content/${payload}`
      );
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
// 글수정하기
export const patchContent = createAsyncThunk(
  "contents/patchContent",
  async ({ newContent, paramId }, thunkAPI) => {
    try {
      await axios.patch(
        `${process.env.REACT_APP_SERVER_URL}/content/${paramId}`,
        newContent
      );
      const res = await axios.get(
        `${process.env.REACT_APP_SERVER_URL}/content?_sort=createdDate&_order=desc`
      );
      return thunkAPI.fulfillWithValue(res.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const deleteContent = createAsyncThunk(
  `${name}/deleteContent`,
  async (paramId, { fulfillWithValue, rejectWithValue }) => {
    try {
      await axios.delete(
        `${process.env.REACT_APP_SERVER_URL}/content/${paramId}`
      );
      const res = await axios.get(
        `${process.env.REACT_APP_SERVER_URL}/content?_sort=createdDate&_order=desc`
      );
      return fulfillWithValue(res.data);
    } catch (e) {
      return rejectWithValue(e);
    }
  }
);

const contentsSlice = createSlice({
  name,
  initialState,
  reducers: {},
  extraReducers: {
    [postContent.pending]: (state) => {
      state.isLoading = true;
    },
    [postContent.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.contents = action.payload;
    },
    [postContent.rejected]: (state, action) => {
      state.error = action.error;
      state.isLoading = false;
    },
    [deleteContent.pending]: (state) => {
      state.isLoading = true;
    },
    [deleteContent.fulfilled]: (state, action) => {
      state.contents = action.payload;
      state.isLoading = false;
    },
    [deleteContent.rejected]: (state, action) => {
      state.error = action.error;
      state.isLoading = false;
    },
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
    [__getSelectedContent.pending]: (state) => {
      state.isLoading = true;
    },
    [__getSelectedContent.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.content = action.payload;
    },
    [__getSelectedContent.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [patchContent.pending]: (state) => {
      state.isLoading = true; // 네트워크 요청이 시작되면 로딩상태를 true로 변경합니다.
    },
    [patchContent.fulfilled]: (state, action) => {
      state.isLoading = false; // 네트워크 요청이 끝났으니, false로 변경합니다.
      state.contents = action.payload; // Store에 있는 contents에 서버에서 가져온 contents를 넣습니다.
    },
    [patchContent.rejected]: (state, action) => {
      state.isLoading = false; // 에러가 발생했지만, 네트워크 요청이 끝났으니, false로 변경합니다.
      state.error = action.payload; // catch 된 error 객체를 state.error에 넣습니다.
    },
    [searchContents.pending]: (state) => {
      state.isLoading = true; // 네트워크 요청이 시작되면 로딩상태를 true로 변경합니다.
    },
    [searchContents.fulfilled]: (state, action) => {
      state.isLoading = false; // 네트워크 요청이 끝났으니, false로 변경합니다.
      state.contents = action.payload; // Store에 있는 contents에 서버에서 가져온 contents를 넣습니다.
    },
    [searchContents.rejected]: (state, action) => {
      state.isLoading = false; // 에러가 발생했지만, 네트워크 요청이 끝났으니, false로 변경합니다.
      state.error = action.payload; // catch 된 error 객체를 state.error에 넣습니다.
    },
  },
});

const { reducer } = contentsSlice;

export default reducer;

// export default contentsSlice.reducer;
// export const contentsActions = contentsSlice.actions;

import { configureStore } from "@reduxjs/toolkit";
import contents from "../modules/contents";
import comments from "../modules/comments";

const store = configureStore({
  reducer: { contents, comments },
});

export default store;

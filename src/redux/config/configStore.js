import { configureStore } from "@reduxjs/toolkit";
import contents from "../modules/contents";
const store = configureStore({
  reducer: { contents },
});

export default store;

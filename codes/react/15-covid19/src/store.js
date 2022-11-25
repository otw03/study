import { configureStore } from "@reduxjs/toolkit";

import Covid19Slice from "./slices/Covid19Slice";

const store = configureStore({
  // 직접 작성한 Slice 오브젝트 명시
  reducer: {
    Covid19Slice: Covid19Slice
  }
});

export default store;

import { configureStore } from '@reduxjs/toolkit';

import StudentSlice from './slices/StudentSlice';

const store = configureStore({
 // 개발자가 직접 작성한 Slice 오브젝트들이 명시되어야 한다.
    reducer: {
        // name값과 store의 key값(앞부분)이 같아야 한다, 뒷부분은 import한 것
        StudentSlice: StudentSlice,
    }
});
export default store;

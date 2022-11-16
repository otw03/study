import { configureStore } from '@reduxjs/toolkit';
import CounterSlice from './slices/CounterSlice';
import DepartmentSlice from './slices/DepartmentSlice';
import NewsSlice from './slices/NewsSlice';
import MovieRankSlice from './slices/MovieRankSlice';
import ImageSearchSlice from './slices/ImageSearchSlice';

const store = configureStore({
 // 개발자가 직접 작성한 Slice 오브젝트들이 명시되어야 한다.
    reducer: {
        // name값과 store의 key값(앞부분)이 같아야 한다, 뒷부분은 import한 것
        CounterSlice: CounterSlice,
        DepartmentSlice: DepartmentSlice,
        NewsSlice:NewsSlice,
        MovieRankSlice: MovieRankSlice,
        ImageSearchSlice: ImageSearchSlice,
    }
});
export default store;

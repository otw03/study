/**
 * 이 단계를 수행하기 위해서는 Reduxhelper의 작업이 선행되어야 한다.
 */

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';
import { pending, fulfilled, rejected } from '../helper/Reduxhelper';

/** 다중행 데이터 조회를 위한 비동기 함수 */
export const getList = createAsyncThunk("DepartmentSlice/getList", async (payload, { rejectWithValue }) => {
    let result = null;

    const URL = process.env.REACT_APP_API_DEPARTMENT_LIST;

    try {
        const response = await axios.get(URL);
        result = response.data;
    } catch (err) {
        result = rejectWithValue(err.response);
    }

    return result;
});

const DepartmentSlice = createSlice({
    name: 'DepartmentSlice',
    // 이 모듈이 관리하고자하는 상태값들을 명시
    // 필요에 따라 변경 가능(현재는 현재값과 일치시킴)
    initialState: {
        data: null,
        loading: false,
        error: null
    },
    // 상태값을 갱신하기 위한 함수들을 구현
    // Ajax의 처리 과정에 따라 자동으로 실행된다.
    extraReducers: {
        /** 다중행 데이터 조회를 위한 액션 함수 */
        // 로딩중임을 표시
        [getList.pending]: pending,
        // 처리가 완료된 경우 - 미들웨어 함수가 정상적으로 리턴한 경우
        [getList.fulfilled]: fulfilled,
        // 처리에 실패한 경우 - 미들웨어 함수 안에서 예외가 발생하여 catch블록이 실행된 경우
        [getList.rejected]: rejected,    
    },
});

export default DepartmentSlice.reducer;

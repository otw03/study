import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';

const API_URL = '/news';

/** Ajax처리를 위한 미들웨어 함수 정의 */
export const getList = createAsyncThunk("NewsSlice/getList", async (payload, { rejectWithValue }) => {
    let result = null;

    try {
        const response = await axios.get(API_URL);
        result = response.data;
    } catch (err) {
        result = rejectWithValue(err.response);
    }

    return result;
});

const NewsSlice = createSlice({
    name: 'NewsSlice',
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
        // 로딩중임을 표시
        [getList.pending]: (state, { payload }) => {
            return { ...state, loading: true }
        },
        // 처리가 완료된 경우 - 미들웨어 함수가 정상적으로 리턴한 경우
        [getList.fulfilled]: (state, { payload }) => {
            return {
                data: payload,
                loading: false,
                error: null
            }
        },
        // 처리에 실패한 경우 - 미들웨어 함수 안에서 예외가 발생하여 catch블록이 실행된 경우
        [getList.rejected]: (state, { payload }) => {
            return {
                // data: payload?.data,
                ...state,
                loading: false,
                error: {
                    // 앞의 '?' 는 옵셔널 체이닝(빼도 코드 실행가능), 뒤의 '?' 는 삼항연산자의 시작
                    code: payload.status ? payload.status : 500,
                    // code: payload?.status ? payload.status : 500,
                    message: payload?.statusText ? payload.statusText : 'Server Error'
                }
            }
        }
    },
});
export default NewsSlice.reducer;

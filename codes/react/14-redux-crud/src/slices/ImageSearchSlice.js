import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';

/** Ajax처리(비동기 처리)를 위한 미들웨어 함수 정의 */
// payload는 이 함수를 호출할 때 전달되는 파라미터
export const getKakaoSearch = createAsyncThunk("ImageSearchSlice/getKakaoSearch", async (payload, { rejectWithValue }) => {
    let result = null;

    try {
        // API-URL 과 API-KEY를 설정파일로부터 가져온다
        const response = await axios.get(process.env.REACT_APP_KAKAO_IMAGE_SEARCH_API_URL, {
            params: {
                // 두 개 이상의 파라미터를 json으로 전달할 경우 payload가 json 객체
                query: payload.query,
                page: payload.page ? payload.page : 1
            },
            headers: { Authorization: `KakaoAK ${process.env.REACT_APP_KAKAO_API_KEY}` }
        });
        result = response.data;
    } catch (err) {
        // 에러 발생시 rejectWithValue() 함수에 에러 데이터를 전달하면 extraReducer의 rejected 함수가 호출된다.
        result = rejectWithValue(err.response);
    }

    return result;
});

/** Slice 정의 */
const ImageSearchSlice = createSlice({
    name: 'ImageSearchSlice',
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
        [getKakaoSearch.pending]: (state, { payload }) => {
            return { ...state, loading: true }
        },
        // 처리가 완료된 경우 - 미들웨어 함수가 정상적으로 리턴한 경우
        [getKakaoSearch.fulfilled]: (state, { meta, payload }) => {
            // action함수의 meta에는 API에 요청시 전송한 파라미터가 포함되어 있다.
            // 1페이지 이후의 검색 결과는 기존 데이터를 덧붙여야 한다.
            if(meta.arg.page > 1) {
                payload.documents = state.data.documents.concat(payload.documents);
                console.log(`누적 데이터 길이=${payload.documents.length}`);
            }
            return {
                data: payload,
                loading: false,
                error: null
            }
        },
        // 처리에 실패한 경우 - 미들웨어 함수 안에서 예외가 발생하여 catch블록이 실행된 경우
        [getKakaoSearch.rejected]: (state, { payload }) => {
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
export default ImageSearchSlice.reducer;

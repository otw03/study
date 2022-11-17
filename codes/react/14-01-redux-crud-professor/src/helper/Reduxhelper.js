/**
 * Redux-Slice에서 반복적으로 사용되는 처리로직을 재사용하기 위해 만든 모듈
 */

const pending = (state, { payload }) => {
    return { ...state, loading: true }
};

const fulfilled = (state, { payload }) => {
    return {
        data: payload,
        loading: false,
        error: null
    }
};

const rejected = (state, { payload }) => {
    return {
        // data: payload?.data,
        ...state,
        loading: false,
        error: {
            // 앞의 '?' 는 옵셔널 체이닝(빼도 코드 실행가능), 뒤의 '?' 는 삼항연산자의 시작
            code: payload.status ? payload.status : 500,
            // code: payload?.status ? payload.status : 500,
            message: payload.statusText ? payload.statusText : 'Server Error'
        }
    }
};

export { pending, fulfilled, rejected };
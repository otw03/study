import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// reducer helper
import { pending, fulfilled, rejected } from "../helper/ReduxHelper";

// 다중행 데이터 조회를 위한 비동기 함수
export const getList = createAsyncThunk("Covid19Slice/getList", async (payload, { rejectWithValue }) => {
  let result = null;

  const URL = process.env.REACT_APP_API_COVID19_LIST;

  // /pages/Covid19.js 에서 날짜를 {gte: gte, lte: lte} 형태로 전달하면 payload객체를 통해 넘어온다.
  // 컨트롤러에서 전달하는 파라미터는 payload로 전달된다.
  // --> 단일 값인 경우 payload 자체가 그 값, 두 개 이상의 파라미터를 가져서 JSON으로 전달할 경우 payload가 JSON 객체가 된다.
  // --> payload.gte, payload.lte
  let params = null;

  /** 
   * payload객체가 null이나 undefined가 아니고, 그 안의 gte와 lte 값이 존재할 때,
   * 기간 사이 날짜를 배열로 리턴하여 params에 대입  
   */
  if (payload?.gte && payload?.lte) {
    let dateArray = [];
    let curDate = new Date(payload.gte); // YYYY-MM-DD
    while (curDate <= new Date(payload.lte)) {
      dateArray.push(curDate.toISOString().split("T",1) + "T00:00:00Z");
      curDate.setDate(curDate.getDate() + 1);
    }
    params = {
      date: dateArray
    };
  }

  try {
    const response = await axios.get(URL, {
      params: params
    });
    result = response.data;
  } catch (err) {
    // 에러 발생시 rejectWithValue() 함수에 에러 데이터를 전달하면 extraReducer의 rejected 함수가 호출된다.
    result = rejectWithValue(err.response);
  }
  return result;
});

const Covid19Slice = createSlice({
  name: "Covid19Slice",
  // 이 모듈이 관리하고자하는 상태값들을 명시
  initialState: {
    data: null,
    loading: false,
    error: null
  },
  reducers: {},
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
  }
});

export default Covid19Slice.reducer;

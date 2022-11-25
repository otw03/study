import React, {memo} from 'react';
import styled from 'styled-components';
import {cloneDeep} from 'lodash';

import Chart from "chart.js/auto";
import { Line } from 'react-chartjs-2';
import dayjs from "dayjs";

/** 차트 박스 스타일 */
const ChartBox = styled.div`
  width: 100%;
  height: 500px;
  padding: 15px;
  box-sizing: border-box;
`;

const LineChartView = memo((props) => {
  /** 데이터 확인 */
  console.log(props.covid19);
  console.log(props.category);

  /** 차트 라벨 이름 변수 초기화 */
  let labelName = null;

  /** 메뉴 선택시 일치하는 해당 카테고리의 데이터 반환 */
  let covid19Data = null;
  labelName = "일일확진자(명)";
  if (props.category == "confirmed") {
    covid19Data = props.covid19.map((v) => {
      return v.confirmed;
    });
  } else if (props.category == "confirmed_acc") {
    labelName = "누적확진자(명)";
    covid19Data = props.covid19.map((v) => {
      return v.confirmed_acc;
    });
  } else if (props.category == "active") {
    labelName = "격리환자(명)";
    covid19Data = props.covid19.map((v) => {
      return v.active;
    });
  } else if (props.category == "released") {
    labelName = "격리해제(명)";
    covid19Data = props.covid19.map((v) => {
      return v.released;
    });
  } else if (props.category == "released_acc") {
    labelName = "누적격리해제(명)";
    covid19Data = props.covid19.map((v) => {
      return v.released_acc;
    });
  } else if (props.category == "death") {
    labelName = "사망자(명)";
    covid19Data = props.covid19.map((v) => {
      return v.death;
    });
  } else if (props.category == "death_acc") {
    labelName = "누적사망자(명)";
    covid19Data = props.covid19.map((v) => {
      return v.death_acc;
    });
  } else {
    labelName = "카테고리를 선택해 주세요.";
  }

  /** 차트 옵션 */
  const defaultOption = {
    Responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top"
      }
    }
  };

  const hgraphOption = cloneDeep(defaultOption);
  hgraphOption.indexAxis = 'y';

  /** props 데이터 배열로 기간 반환 */
  const covid19Period = props.covid19.map((v, i) => {
    return dayjs(v.date).format("MM/DD");
  });

  /** 차트 데이터 */
  const covid19 = {
    labels: covid19Period, // 기간 데이터
    datasets: [
      {
        label: labelName, // 카테고리 이름
        data: covid19Data, // 기간안에 해당 카테고리 값 데이터
        borderWidth: 2,
        borderColor: "blue",
        backgroundColor: "#ccc"
      }
    ]
  };

  return (
    <>
      <div style={{display: 'flex', flexWrap: 'wrap'}}>
        <ChartBox>
          <Line options={defaultOption} data={covid19} />
        </ChartBox>
      </div>
    </>
  );
});

export default LineChartView;

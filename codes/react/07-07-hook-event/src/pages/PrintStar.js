import React from 'react';

/**
 * React에서 document.getElementById(...)에 해당하는 기능을 사용하는 방법
 */
const PrintStar = () => {

    // 상태값
    const [rowNum, setRowNum] = React.useState();

    // HTML 태그를 react 안에서 참조할 수 있는 변수를 생성
    const console = React.useRef();

    // 사용자 입력값을 상태값에 적용하기 위한 이벤트 리스너
    const rowNumChange = e => {
        setRowNum(e.currentTarget.value);
    }

    // rowNum값이 변경된 경우 실행 --> 화면 내용 갱신
    React.useEffect(() => {
        let result = '';
        for(let i=0; i<rowNum; i++) {
            for(let j=0; j<=i; j++) {
                result += '*';
            }
            result += '<br />';
        }
        console.current.innerHTML = result;
    }, [rowNum]);
/* 

*/
    return (
        <div>
            {/* 미리 준비한 컴포넌트 참조변수와 HTML 태그를 연결 */}
            <h1>PrintStar</h1>
            <p>
                useState, useEffect, useRef를 사용한 별찍기 구현
            </p>

            <hr />

            <div>
                <label htmlFor='rowNumInput'>rowNum : </label>
                <input 
                    type='text' 
                    value={rowNum} 
                    id='rowNumInput' 
                    onChange={rowNumChange} 
                />
            </div>

            <hr />

            <div ref={console}></div>
        </div>
    );
};

export default PrintStar;

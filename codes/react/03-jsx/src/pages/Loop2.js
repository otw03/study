import React from 'react';

/**
 * jsx 반복 처리 (2) - map() 함수를 사용한 배열 원소 탐색
 */
const Loop2 = () => {
    // 화면에 표시할 데이터
    const myArray = ['hello', 'world'];

    // 화면에 표시할 반복 컴포넌트
    const myArrayItem = myArray.map((item, index) => {
        return (
            // 반복적으로 처리되는 컴포넌트 요소는 각 항목을 식별하기 위해 고유한 값을 갖는 key속성을 포함해야 함 (React권고사항)
            <li key={index}>{item}</li>
        );
    });
    // 위 반복문 축약식
    // const myArrayItem = myArray.map((item, index) => <li key={index}>{item}</li>);

    // 실제로는 함수로 따로 안 만들고 태그에 바로 넣는다
    // console.log(myArrayItem);

    return (
        <div>
            <h2>Loop1</h2>
            <ul>{myArrayItem}</ul>
        </div>
    );
};

export default Loop2;


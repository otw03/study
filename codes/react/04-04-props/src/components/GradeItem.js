import React from "react";

import PropTypes from 'prop-types';


const GradeItem = ({name, sex, kor, eng, math, sinc}) => {

    const sum = parseInt(kor + eng + math + sinc);
    const avg = parseInt(sum / 4);
    return (
        <tr align="center">
            <td><strong>{name}</strong></td>
            <td>{sex}</td>
            <td>{kor}</td>
            <td>{eng}</td>
            <td>{math}</td>
            <td>{sinc}</td>
            <td><strong>{sum}</strong></td>
            <td><strong>{avg}</strong></td>
        </tr>
    );
};

// 속성들에 대한 타입 정의
// --> 필수 여부 설정은 데이터타입 뒤에 ".isRequired"를 추가 명시
GradeItem.propTypes = {
    name: PropTypes.string.isRequired,
    level: PropTypes.number.isRequired,
    sex: PropTypes.string.isRequired
};

// 속성값에 대한 기본값을 JSON으로 정의 (defaultProps 객체이름 고정).
// 가급적 무조건 권장~!!!!
GradeItem.defaultProps = {
    kor: 0,
    eng: 0,
    math: 0,
    sinc: 0,
};

export default GradeItem;
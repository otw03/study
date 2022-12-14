import React from 'react';
import {useParams} from 'react-router-dom';

const Weather = () => {
    console.clear();

    const weather = {
        "mon": ["맑음", "맑음"],
        "tue": ["비", "맑음"],
        "wed": ["맑음", "흐림"],
        "thu": ["맑음", "흐림"],
        "fri": ["흐림", "흐림"],
        "sat": ["비", "맑음"],
        "sun": ["맑음", "맑음"]
       };
    
    // 파라미터 추출 -> ex) {id: 'mon'}
    const params = useParams();

    console.log(params);    // {id: 'mon'}
    console.log(params.id); // mon
    const day = weather[params.id];
    console.log(day);       // (2) ['맑음', '맑음']

    // 요일값만 추출
    //const {id} = params;
    // 추출한 요일값을 key로 사용하여 weather에서 해당 요일에 해당하는 날씨를 비구조 문법으로 추출
    //const [am, pm] = weather[id];


    return (
        <div>
            <h2>오전</h2>
            <p>{day[0]}</p>
            <h2>오후</h2>
            <p>{day[1]}</p>
        </div>
    );

    // return (
    //     <div>
    //         <h2>오전</h2>
    //         <p>{am}</p>
    //         <h2>오후</h2>
    //         <p>{pm}</p>
    //     </div>
    // );
}

export default Weather;
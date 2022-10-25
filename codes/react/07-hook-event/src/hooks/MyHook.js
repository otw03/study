import React from 'react';
// hook을 직접 커스텀하는 방식 => 커스텀 hook
/**
 * 사용자 정의 함수.
 * useState와 useEffect를 하나의 함수로 묶는 용도로 정의함.
 */
// 페이지 로드: 마운트, 페이지 종료: 언마운트
const MyHook = () => {
    // 브라우저의 넓이를 의미하는 상태값
    const [myWidth, setMyWidth] = React.useState(window.innerWidth);

    // 사용자 정의 함수.
    const onMyResize = () => setMyWidth(window.innerWidth);

    // 페이지 로드시에 이벤트 정의, 페이지 종료시에 이벤트 해제
    React.useEffect(() => {
        window.addEventListener('resize', onMyResize);
        return () => window.removeEventListener('resize', onMyResize);
    }, []);

    // 마지막에 상태값을 리턴한다.
    return myWidth;
};

export default MyHook;
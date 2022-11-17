import React from 'react';
// hook을 직접 커스텀하는 방식 => 커스텀 hook
/**
 * 사용자 정의 함수.
 * useRef와 useEffect를 하나의 함수로 묶는 용도로 정의함.
 */
// 페이지 로드: 마운트, 페이지 종료: 언마운트
const useMountedRef = () => {
    const mountedRef = React.useRef(false); // 화면 출력 전 false

    React.useEffect(() => {
        setTimeout(() => {
            mountedRef.current = true;      // 화면 출력 후 true
        });
    }, []);

    return mountedRef
};

export default useMountedRef;
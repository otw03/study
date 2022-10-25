import React from 'react';

// reducer를 쓰기 위해서 상태값 갱신을 위한 reducer함수가 필요하다
// state - 현재 상태값
// action - x, y, exec
function getResultValue(state, action) {
    let resultValue = 0;

    switch(action.exec) {
        case '+':
            resultValue = action.x + action.y;
            break; 
        case '-':
            resultValue = action.x - action.y;
            break; 
        case '*':
            resultValue = action.x * action.y;
            break; 
        case '/':
            resultValue = action.x / action.y;
            break; 
        default:
            return resultValue;
    }
    return resultValue;
}

const Calc = () => {
    const [resultValue, setResultValue] = React.useReducer(getResultValue, 0);

    // 참조변수
    const x = React.useRef();
    const y = React.useRef();
    const exec = React.useRef();

    // 버튼 클릭 이벤트 --> useCallback을 활용하여 중복 처리 방지함
    const onButtonClick = React.useCallback( (e) => {
        setResultValue({
            x: Number(x.current.value),
            y: Number(y.current.value),
            // dropdown의 선택된 option의 value 예시
            // --> document.querySelector("#subject")[document.querySelector("#subject").selectedIndex].value
            exec: exec.current[exec.current.selectedIndex].value,
        });
    }, []);

    const color = React.useMemo( (e) => {
        return resultValue % 2 ? '#f60' : '#06f';
    }, [resultValue]);

    return (
        <div>
            <h1>Calc</h1>
            <input type='text' ref={x} />
            <select ref={exec}>
                <option value='+'>+</option>
                <option value='-'>-</option>
                <option value='*'>*</option>
                <option value='/'>/</option>
            </select>
            <input type='text' ref={y} />
            <button type='button' onClick={onButtonClick}>결과확인</button>

            <h1 style={{color: color}}>결과값: {resultValue}</h1>
        </div>
    );
};

export default Calc;

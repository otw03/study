import React, {memo, useRef} from 'react';  // useRef를 React.useRef() 대신 useRef() 쓰기 위함
import styled from 'styled-components';

const Box = styled.div`
    &.box1 {
        border: 10px solid black;
        margin: 10px auto;
        padding: 30px;
        text-align: center;
        width: auto;
    }

    &.box2 {
        border: 10px dotted red;
        margin: 10px auto;
        padding: 50px;
        text-align: left;
        width: 50%;
    }
`;

const Button = styled.input`
    margin: 0 5px;
`;

// memo는 memorize 성능최적화, memo를 여기서 직접 사용하거나 default로 내보낼때 memo로 감쌀 수도 있다. ex: export default memo(StyleEx);
const StyleEx = memo(() => {    
    // <Box>를 제어하기 위한 참조변수
    const myBox = useRef(); 

    return (
        <div>
            <h1>StyleEx</h1>

            <Box className='box1' ref={myBox}>  {/* myBox.current */}
                <h1>Hello React</h1>
            </Box>

            <Button type="button" value="(폰트) orange" onClick={e => {
                // 직접 CSS 속성 설정하기
                myBox.current.style.color = '#f60';
            }} />

            <Button type="button" value="(폰트) sky" onClick={e => {
                // setProperty 메서드를 사용하여 CSS 속성 설정하기
                myBox.current.style.setProperty('color', '#06f');
            }} />

            <Button type="button" value="(배경) yellow" onClick={e => {
                // 직접 CSS 속성을 설정할 경우 JavaScript property명으로 접근해야 한다.
                myBox.current.style.backgroundColor = '#ff0';
            }} />

            <Button type="button" value="(배경) pink" onClick={e => {
                // setProperty 메서드를 사용할 경우 원래의 CSS 속성명을 사용할 수 있다.
                myBox.current.style.setProperty('background-color', '#f0f');
            }} />

            <Button type="button" value="box1 클래스 적용" onClick={e => {
                myBox.current.classList.add('box1');
                myBox.current.classList.remove('box2');
            }} />

            <Button type="button" value="box2 클래스 적용" onClick={e => {
                myBox.current.classList.add('box2');
                myBox.current.classList.remove('box1');
            }} />
        </div>
    );
});

export default StyleEx;

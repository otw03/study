/**
 * @filename: Side.js
 * @description: 왼쪽 사이드바 공통 컴포넌드
 * @author: 
 */

/** 패키지 참조 */
import React from 'react';
import styled from 'styled-components';
import mq from '../../MediaQuery';
import Jumbotron from './Jumbotron';
import About from './About';
import Menu from './Menu';
import Contact from './Contact';


/** #content 영역 컨테이너에 대한 styledComponent 구현 */
const MainContainer = styled.section`
    max-width: 1200px;
    margin: auto;
    background-color: #fff;
    max-width: 1500px;

    ${mq.maxWidth('sm')`
        
    `}
`;


/**
 * 메인 페이지 레이아웃 구성 함수
 * @returns {JSX.Element}
 */
const Main = () => {
    return (
        <MainContainer>
            <Jumbotron />
            <About />
            <Menu />
            <Contact />
        </MainContainer>
    );
};

export default Main;

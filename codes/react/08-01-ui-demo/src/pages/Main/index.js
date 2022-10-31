/**
 * @filename: index.js
 * @description: 메인 영역 컴포넌트
 * @author: 
 */

/** 패키지 참조 */
import React from 'react';
import styled from 'styled-components';
import mq from '../../MediaQuery';
import Jumbotron from './Jumbotron';
import Projects from './Projects';
import About from './About';
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
            <Projects />
            <About />
            <Contact />
        </MainContainer>
    );
};

export default Main;

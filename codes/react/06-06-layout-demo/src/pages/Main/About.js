/**
 * @filename: About.js
 * @description: 메인 About 컴포넌트
 * @author: 
 */

/** 패키지 참조 */
import React from 'react';
import styled from 'styled-components';
import table1 from '../../img/tablesetting1.jpg';
import mq from '../../MediaQuery';

/** 메인 About 컴포넌트 스타일 정의*/
const AboutContainer = styled.div`
    display: flex;
    line-height: 1.5;
    padding: 80px;

    img {
        width: 50%;
    }

    div {

        &:nth-child(2) {
            text-align: center;
            margin-right: 0;
        }

        p {
            margin: 20px;
            text-align: left;
            font-size: 16px;
        }

        span {
            background-color: #f1f1f1;
        }
    }
    h1 {
        margin: 10px 0;
        font-size: 35px;
        letter-spacing: 5px;
    }

    h5 {
        font-size: 18px;
        letter-spacing: 5px;
    }

    ${mq.maxWidth('sm')`
        width: 100%;
        flex-direction: column;
        img {
            width: 100%;
        }
    `}
`;


const About = () => {
    return (
        <AboutContainer id="about">
            <img src={table1} alt='aboutImg' />
            <div>
                <h1>About Catering</h1>
                <br />

                <h5>Tradition since 1889</h5>
                <p>The Catering was founded in blabla by Mr. Smith in lorem ipsum dolor sit amet, consectetur adipiscing elit consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute iruredolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.We only use <span>&nbsp seasonal &nbsp</span> ingredients.</p>
                <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod temporincididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
        </AboutContainer>
    );
}

export default About;

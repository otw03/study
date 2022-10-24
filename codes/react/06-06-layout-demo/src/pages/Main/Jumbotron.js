/**
 * @filename: Jumbotron.js
 * @description: 왼쪽 사이드바 공통 컴포넌드
 * @author: 
 */

/** 패키지 참조 */
import React from 'react';
import styled from 'styled-components';
import burger from '../../img/hamburger.jpg';
import mq from '../../MediaQuery';

/** 왼쪽 사이드바 컴포넌트 스타일 정의*/
const JumbotronContainer = styled.div`

    img {
        width: 100%;
    }
    div {
        position: relative;
        
        h1 {
            position: absolute;
            bottom: 4%;
            left: 2%;
            font-size: 36px;
            font-weight: 2;
            letter-spacing: 4.7px;
        }
    }

    ${mq.maxWidth('sm')`
        width: 100%;
        flex-direction: column;
        img {
            width: 100%;
        }
    `}
`;


const Jumbotron = () => {
    return (
        <JumbotronContainer>
            <div>
            <img src={burger} alt='headImg' />
            
                <h1>Le Catering</h1>
            </div>
        </JumbotronContainer>
    );
}

export default Jumbotron;

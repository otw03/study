/**
 * @filename: Jumbotron.js
 * @description: 상단 이미지 컴포넌트
 * @author: 
 */

/** 패키지 참조 */
import React from 'react';
import styled from 'styled-components';
import architect from '../../img/architect.jpg';
import mq from '../../MediaQuery';

/** 상단 이미지 컴포넌트 스타일 정의*/
const JumbotronContainer = styled.div`
    /* width: 100%; */
    position: relative;

    img {
        width: 100%;
    }
    
    h1 {
        position: absolute;
        display: flex;
        align-items: center;
        bottom: 45%;
        left: 39%;
        font-size: 36px;
        font-weight: normal;
        letter-spacing: 2.5px;
        color: #fff;

        span {
            background-color: rgba(0,0,0,1);
            padding: 5px 15px;
            opacity: 0.75;
            font-weight: bold;
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
            <img src={architect} alt='headImg' />
                <h1>
                    <span>BR</span> Architects
                </h1>
            </div>
        </JumbotronContainer>
    );
}

export default Jumbotron;

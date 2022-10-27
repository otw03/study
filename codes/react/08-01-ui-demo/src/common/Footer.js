/**
 * @filename: Footer.js
 * @description: 페이지 하단 공통 컴포넌트
 * @author: 
 */

/** 패키지 참조 */
import React from 'react';
import styled from 'styled-components';
import mq from '../MediaQuery';

/** 페이지 하단 컴포넌트 스타일 정의*/
const FooterContainer = styled.footer`
    padding: 40px;
    text-align: center;
    background-color: rgba(0,0,0,1);
    color: #fff;
    a {
        text-decoration: underline;
        color: #fff;
    }

    ${mq.maxWidth('sm')`
        padding: 10px;
        font-size: 14px;
    `}
`;

/**
 * 페이지 하단 컴포넌트 구현
 * @returns {JSX.Element}
 */
const Footer = () => {
    return (
        <FooterContainer>
            <p>Powered by <a href="https://www.w3schools.com/w3css/default.asp">w3.css</a></p>
        </FooterContainer>
    );
};

export default Footer;

/**
 * @filename: Navbar.js
 * @description: 메뉴바 공통 컴포넌트
 * @author: 
 */

/** 패키지 참조 */
import React from 'react';
import styled from 'styled-components';
// import { HashLink } from 'react-router-dom';
import mq from '../MediaQuery';
import { HashLink } from 'react-router-hash-link';

/** 메뉴바 컴포넌트 스타일 정의*/
const NavbarContainer = styled.nav`
    overflow: hidden;
    position: sticky;
    background-color: #fff;
    top: 0;
    display: flex;
    justify-content: space-between;
    width: 100%;
    box-shadow: 0 0 8px 0 gray;
    letter-spacing: 4px;
    z-index: 9999;
    
    div {
        display: flex;
        
        b {
            font-weight: bold;
        }

        a {
            color: black;
            padding: 14px 20px;
            text-decoration: none;
            font-size: 16px;
            text-align: center;

            ${mq.maxWidth('sm')`
                font-size: 14px;
            `}

            &:hover {
                background-color: #ddd;
                color: black;
            }
        }
    }
`;

/**
 * 메뉴바 컴포넌트 구현
 * @returns {JSX.Element}
 */

const Navbar = () => {
    return (
        <NavbarContainer>
            <div>
                <HashLink to="/#"><b>BR</b> Architects</HashLink>
            </div>
            <div >
                <HashLink to="/#projects">Projects</HashLink>
                <HashLink to="/#about">About</HashLink>
                <HashLink to="/#contact">Contact</HashLink>
            </div>
        </NavbarContainer>
    );
};

export default Navbar;

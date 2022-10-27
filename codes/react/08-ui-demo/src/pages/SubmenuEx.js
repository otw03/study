import React, {memo, useCallback} from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import btn from '../assets/img/btn.png';
import btnOver from '../assets/img/btn_over.png';

const MenuContainer = styled.ul`
    /** 기본 속성 초기화 */
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;

    /** 메뉴에 포함된 모든 링크에 대한 크기, 배경 지정 및 글자 꾸미기 */
    /* menu-container의 자손 모든 a (자식x) */
    .link {
        display: block;
        width: 179px;
        height: 48px;
        background: url(${btn});
        /* 박스높이와 텍스트 높이가 같으면 텍스트가 세로 중앙정렬됨 */
        line-height: 48px;
        text-align: center;
        font-weight: bold;
        color: #cfdfb5;
        text-decoration: none;

        /** 마우스가 올라간 링크에 대한 배경이미지 변경 */
        &:hover {
            background: url(${btnOver});
        }
    }

    .menu-item {
        flex: 0 0;
        /** 서브메뉴의 기준점을 부모요소로 지정하기 위한 처리 */
        position: relative;

        /** 서브메뉴가 펼쳐지더라도 다른 요소들 위에 떠 있어야 하므로, Position처리 */
        .sub {
            list-style: none;
            margin: 0;
            padding: 0;
            position: absolute;
            z-index: 1000;
            /* 최대 높이를 0으로 설정하고 삐져나온 부분을 숨긴 후에 transition으로 높이를 조절한다 */
            max-height: 0;
            overflow: hidden;
            transition: max-height 180ms ease-out;
        }
    }
`;

const SubmenuEx = memo(() => {
    const onMenuItemOver = useCallback((e) => {
        const current = e.currentTarget;
        const sub = current.querySelector('.sub');
        // scrollHeight는 요소의 크기를 벗어난 만큼의 높이를 의미
        sub.style.maxHeight = sub.scrollHeight + 'px';
    }, []);

    const onMenuItemOut = useCallback((e) => {
        const current = e.currentTarget;
        const sub = current.querySelector('.sub');
        sub.style.maxHeight = null;
    }, []);


    return (
        <div>
            <h1>SubmenuEx</h1>

            <MenuContainer>
                <li className='menu-item' onMouseOver={onMenuItemOver} onMouseOut={onMenuItemOut}>
                    <Link to='#' className='link'>Frontend</Link>
                    <ul className='sub'>
                        <li><Link to='#' className='link'>HTML+CSS</Link></li>
                        <li><Link to='#' className='link'>JavaScript</Link></li>
                        <li><Link to='#' className='link'>jQuery</Link></li>
                    </ul>
                </li>
                <li className='menu-item' onMouseOver={onMenuItemOver} onMouseOut={onMenuItemOut}>
                    <Link to='#' className='link'>Backend</Link>
                    <ul className='sub'>
                        <li><Link to='#' className='link'>PHP</Link></li>
                        <li><Link to='#' className='link'>JSP</Link></li>
                        <li><Link to='#' className='link'>Node.js</Link></li>
                    </ul>
                </li>
                <li className='menu-item' onMouseOver={onMenuItemOver} onMouseOut={onMenuItemOut}>
                    <Link to='#' className='link'>Mobile</Link>
                    <ul className='sub'>
                        <li><Link to='#' className='link'>iOS</Link></li>
                        <li><Link to='#' className='link'>Android</Link></li>
                        <li><Link to='#' className='link'>Hybrid</Link></li>
                    </ul>
                </li>
            </MenuContainer>

            {/* 페이지 컨텐츠를 가정한 요소 */}
            <h1>Hello World</h1>
        </div>
    );
});

export default SubmenuEx;

/**
 * @filename: App.js
 * @description: 레이아웃 구성 컨테이너
 * @author: 
 */

/** 패키지 참조 */
// 리액트 기본
import React from 'react';
// 라우팅 처리
import { Routes, Route } from "react-router-dom";
import MenuLink from './components/MenuLink';
import PrintStar from './pages/PrintStar';
import Calc from './pages/Calc';

/**
 * 기본 레이아웃 구성 함수
 * @returns {JSX.Element}
 */
const App = () => {
    return (
        <div>
            <h1>연습문제 07</h1>
            <nav>
                <MenuLink to='/printstar'>PrintStar</MenuLink>
                <MenuLink to='/calc'>Calc</MenuLink>
            </nav>
            <Routes>
                <Route path='/printstar' element={<PrintStar />} />
                <Route path='/calc' element={<Calc />} />
            </Routes>
        </div>
    );
};

export default App;

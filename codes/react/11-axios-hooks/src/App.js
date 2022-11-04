/**
 * @filename: App.js
 * @description: ui 구성 컨테이너
 * @author: 
 */

/** 패키지 참조 */
// 리액트 기본
import React, { memo } from 'react';
import { Routes, Route } from "react-router-dom";

import MenuLink from './components/MenuLink';

import Titanic from './pages/Titanic';
import Exam11 from './pages/Exam11';

/**
 * 기본 레이아웃 구성 함수
 * @returns {JSX.Element}
 */
const App = memo(() => {
    return (
        <div>
            <h1>11-axios-hooks</h1>              
            <nav>
                <MenuLink to='/titanic'>Titanic</MenuLink>
                <MenuLink to='/exam11'>Exam11</MenuLink>
            </nav>

            <hr />

            <Routes>
                <Route path='/titanic' element={<Titanic />} />
                <Route path='/exam11' element={<Exam11 />} />
            </Routes>
        </div>
    );
});

export default App;

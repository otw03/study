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

import News from './pages/News';
import Department from './pages/Department';
import Professor from './pages/Professor';
import Titanic from './pages/Titanic';

/**
 * 기본 레이아웃 구성 함수
 * @returns {JSX.Element}
 */
const App = memo(() => {
    return (
        <div>
            <h1>11-axios-hooks</h1>

            <nav>
                <MenuLink to='/news'>News</MenuLink>
                <MenuLink to='/department'>Department</MenuLink>
                <MenuLink to='/professor'>교수관리</MenuLink>
                <MenuLink to='/titanic'>Titanic</MenuLink>
            </nav>

            <hr />

            <Routes>
                <Route path='/news' element={<News />} />
                <Route path='/department' element={<Department />} />
                <Route path='/professor' element={<Professor />} />
                <Route path='/titanic' element={<Titanic />} />
            </Routes>
        </div>
    );
});

export default App;

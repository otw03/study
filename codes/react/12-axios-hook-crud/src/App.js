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

import GradeList from './pages/GradeList';
import GradeAdd from './pages/GradeAdd';
import GradeEdit from './pages/GradeEdit';

/**
 * 기본 레이아웃 구성 함수
 * @returns {JSX.Element}
 */
const App = memo(() => {
    return (
        <div>
            <h1>12-axios-hook-crud</h1>    

            <Routes>
                <Route path='/' exapt={true} element={<GradeList />} />
                <Route path='/add' element={<GradeAdd />} />
                <Route path='/edit/:id' element={<GradeEdit />} />
            </Routes>
        </div>
    );
});

export default App;

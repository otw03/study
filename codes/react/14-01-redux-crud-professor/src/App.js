/**
 * @filename: App.js
 * @description: ui 구성 컨테이너
 * @author: 
 */

/** 패키지 참조 */
// 리액트 기본
import React, { memo } from 'react';
import { Routes, Route } from "react-router-dom";

import ProfessorList from './pages/ProfessorList';
import ProfessorAdd from './pages/ProfessorAdd';
import ProfessorView from './pages/ProfessorView';
import ProfessorEdit from './pages/ProfessorEdit';

/**
 * 기본 레이아웃 구성 함수
 * @returns {JSX.Element}
 */
const App = memo(() => {
    return (
        <div>
            <h1>14-redux-crud-professor</h1>    

            <Routes>
                <Route path='/' exapt={true} element={<ProfessorList />} />
                <Route path='/professor_add' element={<ProfessorAdd />} />
                <Route path='/professor_view/:id' element={<ProfessorView />} />
                <Route path='/professor_edit/:id' element={<ProfessorEdit />} />
            </Routes>
        </div>
    );
});

export default App; 

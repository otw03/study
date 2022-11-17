/**
 * @filename: App.js
 * @description: ui 구성 컨테이너
 * @author: 
 */

/** 패키지 참조 */
// 리액트 기본
import React, { memo } from 'react';
import { Routes, Route } from "react-router-dom";

import StudentList from './pages/StudentList';
import StudentAdd from './pages/StudentAdd';
import StudentView from './pages/StudentView';
import StudentEdit from './pages/StudentEdit';

/**
 * 기본 레이아웃 구성 함수
 * @returns {JSX.Element}
 */
const App = memo(() => {
    return (
        <div>
            <h1>14-redux-crud-student</h1>    

            <Routes>
                <Route path='/' exapt={true} element={<StudentList />} />
                <Route path='/student_add' element={<StudentAdd />} />
                <Route path='/student_view/:id' element={<StudentView />} />
                <Route path='/student_edit/:id' element={<StudentEdit />} />
            </Routes>
        </div>
    );
});

export default App; 

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
import Counter from './pages/Counter';
import ImageSearch from './pages/ImageSearch';

import DepartmentList from './pages/DepartmentList';
import DepartmentAdd from './pages/DepartmentAdd';
import DepartmentView from './pages/DepartmentView';
import DepartmentEdit from './pages/DepartmentEdit';

/**
 * 기본 레이아웃 구성 함수
 * @returns {JSX.Element}
 */
const App = memo(() => {
    return (
        <div>
            <h1>14-redux-crud</h1>    
            <nav>
                <MenuLink to='./counter'>Counter</MenuLink>
                <MenuLink to='./image_search'>ImageSearch</MenuLink>
                <MenuLink to='/'>DepartmentList</MenuLink>
            </nav>

            <Routes>
                <Route path='/counter' element={<Counter />} />
                <Route path='/image_search' element={<ImageSearch />} />
                <Route path='/' exapt={true} element={<DepartmentList />} />
                <Route path='/department_add' element={<DepartmentAdd />} />
                <Route path='/department_view/:id' element={<DepartmentView />} />
                <Route path='/department_edit/:id' element={<DepartmentEdit />} />
            </Routes>
        </div>
    );
});

export default App; 

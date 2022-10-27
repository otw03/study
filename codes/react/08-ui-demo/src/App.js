/**
 * @filename: App.js
 * @description: ui 구성 컨테이너
 * @author: 
 */

/** 패키지 참조 */
// 리액트 기본
import React from 'react';
import { Routes, Route } from "react-router-dom";

import MenuLink from './components/MenuLink';
import ImageEx from './pages/ImageEx';
import StyleEx from './pages/StyleEx';
import TabEx from './pages/TabEx';
import SubmenuEx from './pages/SubmenuEx';
import CollapseEx from './pages/CollapseEx';
import CreateElementEx from './pages/CreateElementEx';


/**
 * 기본 레이아웃 구성 함수
 * @returns {JSX.Element}
 */
const App = () => {
    return (
        <div>
            <h1>UI-Demo</h1>

            <nav>
                <MenuLink to='/image_ex'>ImageEx</MenuLink>
                <MenuLink to='/style_ex'>StyleEx</MenuLink>
                <MenuLink to='/tab_ex'>TabEx</MenuLink>
                <MenuLink to='/submenu_ex'>SubmenuEx</MenuLink>
                <MenuLink to='/collapse_ex'>CollapseEx</MenuLink>
                <MenuLink to='/create_element_ex'>CreateElementEx</MenuLink>
            </nav>

            <hr />

            <Routes>
                <Route path='/image_ex' element={<ImageEx />} />
                <Route path='/style_ex' element={<StyleEx />} />
                <Route path='/tab_ex' element={<TabEx />} />
                <Route path='/submenu_ex' element={<SubmenuEx />} />
                <Route path='/collapse_ex' element={<CollapseEx />} />
                <Route path='/create_element_ex' element={<CreateElementEx />} />
            </Routes>
        </div>
    );
};

export default App;

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

import FsLightboxEx from './pages/FsLightboxEx';
import AosEx from './pages/AosEx';
import Slider from './pages/Slider';
import SweetAlert2Ex from './pages/SweetAlert2Ex';
import ChartEx from './pages/ChartEx';


/**
 * 기본 레이아웃 구성 함수
 * @returns {JSX.Element}
 */
const App = memo(() => {
    return (
        <div>
            <h1>UI-Demo</h1>

            <nav>
                <MenuLink to='/fs_lightbox_ex'>FsLightboxEx</MenuLink>
                <MenuLink to='/aos'>AosEx</MenuLink>
                <MenuLink to='/slider'>Slider</MenuLink>
                <MenuLink to='/swal'>SweetAlert2Ex</MenuLink>
                <MenuLink to='/chart'>ChartEx</MenuLink>
            </nav>

            <hr />

            <Routes>
                <Route path='/fs_lightbox_ex' element={<FsLightboxEx />} />
                <Route path='/aos' element={<AosEx />} />
                <Route path='/slider' element={<Slider />} />
                <Route path='/swal' element={<SweetAlert2Ex />} />
                <Route path='/chart' element={<ChartEx />} />
            </Routes>
        </div>
    );
});

export default App;

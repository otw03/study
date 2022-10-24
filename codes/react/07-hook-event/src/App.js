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
import MyState from './pages/MyState';
import DateRange1 from './pages/DateRange1';
import MyEffect from './pages/MyEffect';
import MyRef from './pages/MyRef';
import MyReducer from './pages/MyReducer';
import DateRange2 from './pages/DateRange2';
import MyMemo from './pages/MyMemo';
import MyCallback from './pages/MyCallback';
import MyWidth from './pages/MyWidth';

/**
 * 기본 레이아웃 구성 함수
 * @returns {JSX.Element}
 */
const App = () => {
    return (
        <div>
            <h1>07-hook-event</h1>
            <nav>
                <MenuLink to='/myState'>MyState</MenuLink>
                <MenuLink to='/daterange1'>DateRange1</MenuLink>
                <MenuLink to='/myEffect'>MyEffect</MenuLink>
                <MenuLink to='/myRef'>MyRef</MenuLink>
                <MenuLink to='/myReducer'>MyReducer</MenuLink>
                <MenuLink to='/daterange2'>DateRange2</MenuLink>
                <MenuLink to='/mymemo'>MyMemo</MenuLink>
                <MenuLink to='/mycallback'>MyCallback</MenuLink>
                <MenuLink to='/mywidth'>MyWidth</MenuLink>
            </nav>
            <Routes>
                <Route path='/mystate' element={<MyState />} />
                <Route path='/daterange1' element={<DateRange1 />} />
                <Route path='/myeffect' element={<MyEffect />} />
                <Route path='/myref' element={<MyRef />} />
                <Route path='/myreducer' element={<MyReducer />} />
                <Route path='/daterange2' element={<DateRange2 />} />
                <Route path='/mymemo' element={<MyMemo />} />
                <Route path='/mycallback' element={<MyCallback />} />
                <Route path='/mywidth' element={<MyWidth />} />
            </Routes>
        </div>
    );
};

export default App;

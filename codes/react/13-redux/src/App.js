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
import Department from './pages/Department';
import News from './pages/News';
import MovieRank from './pages/MovieRank';
import ImageSearch from './pages/ImageSearch';

/**
 * 기본 레이아웃 구성 함수
 * @returns {JSX.Element}
 */
const App = memo(() => {
    return (
        <div>
            <h1>13-REDUX</h1>    
            <nav>
                <MenuLink to='./counter'>Counter</MenuLink>
                <MenuLink to='./department'>Department</MenuLink>
                <MenuLink to='./news'>News</MenuLink>
                <MenuLink to='./movie_rank'>MovieRank</MenuLink>
                <MenuLink to='./image_search'>ImageSearch</MenuLink>
            </nav>

            <Routes>
                <Route path='/counter' element={<Counter />} />
                <Route path='/department' element={<Department />} />
                <Route path='/news' element={<News />} />
                <Route path='/movie_rank' element={<MovieRank />} />
                <Route path='/image_search' element={<ImageSearch />} />
            </Routes>
        </div>
    );
});

export default App;

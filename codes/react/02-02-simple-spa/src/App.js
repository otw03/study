import React from 'react';
import { Link, Routes, Route } from "react-router-dom";

import Weather from './Weather';


const App = () => {
    return (
        <div>
            <h1>주간날씨</h1>
            <hr />
            {/* 링크 */}
            <nav>
                <Link to="/weather/mon">월</Link>&nbsp; |&nbsp;
                <Link to="/weather/tue">화</Link>&nbsp; |&nbsp;
                <Link to="/weather/wed">수</Link>&nbsp; |&nbsp;
                <Link to="/weather/thu">목</Link>&nbsp; |&nbsp;
                <Link to="/weather/fri">금</Link>&nbsp; |&nbsp;
                <Link to="/weather/sat">토</Link>&nbsp; |&nbsp;
                <Link to="/weather/sun">일</Link>
            </nav>

            {/* 컴포넌트 */}
            <Routes>
                <Route path="/weather/:id" element={<Weather/>} exact={true} />
            </Routes>
        </div>
    );
}

export default App;

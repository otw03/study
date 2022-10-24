import React from 'react';
import { Link, Routes, Route } from "react-router-dom";
import GradeTable from "./pages/GradeTable";

const App = () => {
    return (
        <div>
            <h1>성적표</h1>
            <nav>
                <Link to="/grade_table/1학년">1학년</Link>&nbsp;|&nbsp;
                <Link to="/grade_table/2학년">2학년</Link>&nbsp;|&nbsp;
                <Link to="/grade_table/3학년">3학년</Link>&nbsp;|&nbsp;
                <Link to="/grade_table/4학년">4학년</Link>&nbsp;
            </nav>
            <hr />

            {/* Route 처리할 컴포넌트 정의 */}
            <Routes>
                <Route path="/grade_table/:grade" element={<GradeTable/>} />
            </Routes>           
        </div>
    );
}

export default App;

import React from 'react';
import { Link, Routes, Route } from "react-router-dom";
import Department from './pages/Department';
import Professor from './pages/Professor';
import Student from './pages/Student';

const App = () => {
    return (
        <div>
            <h1>Exam03</h1>
            <nav>
                <Link to="/department">학과목록</Link>&nbsp;|&nbsp;
                <Link to="/professor">교수목록</Link>&nbsp;|&nbsp;
                <Link to="/student">학생목록</Link>
            </nav>
            <hr />
            <Routes>
                <Route path='/department' element={<Department/>} />
                <Route path='/professor' element={<Professor/>} />
                <Route path='/student' element={<Student/>} />
            </Routes>
        </div>
    );
}

export default App;

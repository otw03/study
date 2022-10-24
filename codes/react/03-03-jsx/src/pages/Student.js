import React from 'react';
import data from '../myschool';


const Student = () => {

    let student = data.student;
    console.log(student);
    return (
        <div>
            <h2>학생목록</h2>
            <table border='1'>
            <tbody>
                    <tr>
                        <td><strong>학생번호</strong></td>
                        <td><strong>학생이름</strong></td>
                        <td><strong>학년</strong></td>
                        <td><strong>아이디</strong></td>
                        <td><strong>주민번호</strong></td>
                        <td><strong>생년월일</strong></td>
                        <td><strong>연락처</strong></td>
                        <td><strong>키</strong></td>
                        <td><strong>몸무게</strong></td>
                        <td><strong>소속학과번호</strong></td>
                        <td><strong>담당교수번호</strong></td>
                    </tr>
                    {student.map((v, i) => {
                        return (
                            <tr>
                                <td key={i}>{v.id}</td>
                                <td key={i}>{v.name}</td>
                                <td key={i}>{v.userid}</td>
                                <td key={i}>{v.grade}</td>
                                <td key={i}>{(v.idnum).substring(0,6)+"-*******"}</td>
                                <td key={i}>{(v.birthdate).substring(0,10)}</td>
                                <td key={i}>{v.tel}</td>
                                <td key={i}>{v.height}</td>
                                <td key={i}>{v.weight}</td>
                                <td key={i}>{v.deptno}</td>
                                <td key={i}>{v.profno}</td>
                            </tr>
                        )
                    })}
                    
                </tbody>
            </table>
        </div>
    );
};

/* 
    // 학생목록
    "student": [
        {
            "id": 10101,
            "name": "전인하",
            "userid": "jun123",
            "grade": 4,
            "idnum": "7907021369824",
            "birthdate": "1979-07-01T15:00:00.000Z",
            "tel": "051)781-2158",
            "height": 176,
            "weight": 72,
            "deptno": 101,
            "profno": 9903
        },
*/

export default Student;
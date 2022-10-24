import React from 'react';
import data from '../myschool';


const Professor = () => {

    let professor = data.professor;
    console.log(professor);
    return (
        <div>
            <h2>교수목록</h2>
            <table border='1'>
                <tbody>
                    <tr>
                        <td><strong>교수번호</strong></td>
                        <td><strong>교수이름</strong></td>
                        <td><strong>아이디</strong></td>
                        <td><strong>직급</strong></td>
                        <td><strong>급여</strong></td>
                        <td><strong>입사일</strong></td>
                        <td><strong>보직수당</strong></td>
                        <td><strong>소속학과번호</strong></td>
                    </tr>
                    {professor.map((v, i) => {
                        return (
                            <tr>
                                <td key={i}>{v.id}</td>
                                <td key={i}>{v.name}</td>
                                <td key={i}>{v.userid}</td>
                                <td key={i}>{v.position}</td>
                                <td key={i}>{v.sal}</td>
                                <td key={i}>{(v.hiredate).substring(0,10)}</td>
                                <td key={i}>{v.comm}</td>
                                <td key={i}>{v.deptno}</td>
                            </tr>
                        )
                    })}
                    
                </tbody>
            </table>
        </div>
    );
};
/* 
    // 교수목록
    "professor": [
        {
            "id": 9901,
            "name": "김도훈",
            "userid": "capool",
            "position": "교수",
            "sal": 500,
            "hiredate": "1982-06-11T15:00:00.000Z",
            "comm": 20,
            "deptno": 101
        },
*/


export default Professor;
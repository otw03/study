import React from 'react';
import data from '../myschool';


const Department = () => {

    let department = data.department;
    console.log(department);
    return (
        <div>
            <h2>학과목록</h2>
            <table border='1'>
                <tbody>
                    <tr>
                        <td><strong>학과번호</strong></td>
                        <td><strong>학과이름</strong></td>
                        <td><strong>위치</strong></td>
                    </tr>
                    {department.map((v, i) => {
                        return (
                            <tr>
                                <td key={i}>{v.id}</td>
                                <td key={i}>{v.dname}</td>
                                <td key={i}>{v.loc}</td>
                            </tr>
                        )
                    })}
                    
                </tbody>
            </table>
        </div>
    );
};

/* 
    // 학과목록
    "department": [
        { "id": 101, "dname": "컴퓨터공학과", "loc": "1호관" },
        { "id": 102, "dname": "멀티미디어학과", "loc": "2호관" },
        { "id": 201, "dname": "전자공학과", "loc": "3호관" },
        { "id": 202, "dname": "기계공학과", "loc": "4호관" }
    ],
*/

export default Department;
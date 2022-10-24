import React from "react";
import GradeItem from "../components/GradeItem";
import GradeData from "../GradeData";
import { useParams } from "react-router-dom";

import Meta from "../Meta";


const GradeTable = () => {
    const params = useParams();
    console.log(params.grade);
    console.log(GradeData[params.grade]);
    let gradeData = GradeData[params.grade];
    console.log(gradeData);
    let tie = params.grade + ":::React연습문제";
    
    return (
        <div>
            <Meta title={tie} description="여기는 GradeTable.js 파일 입니다." />
            <h2>{params.grade}</h2>
            <table border='1'>
                <thead>
                    <tr>
                        <td><strong>이름</strong></td>
                        <td><strong>성별</strong></td>
                        <td><strong>국어</strong></td>
                        <td><strong>영어</strong></td>
                        <td><strong>수학</strong></td>
                        <td><strong>과학</strong></td>
                        <td><strong>총점</strong></td>
                        <td><strong>평균</strong></td>
                    </tr>
                </thead>
                <tbody>
                    
                    {gradeData.map((v, i) => {
                        return (<GradeItem 
                            key={i} 
                            name={v.이름} 
                            sex={v.성별}                             
                            kor={v.국어} 
                            eng={v.영어} 
                            math={v.수학} 
                            sinc={v.과학} 
                        />)
                    })}
                </tbody>
            </table>
        </div>
    );
}   

export default GradeTable;
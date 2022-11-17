/**
 * 이 작업을 수행하기 위해서는 '/components/TableEx.js' 가 먼저 선행 되어야 한다.
 */
import React, { memo, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { postItem } from '../slices/StudentSlice';

import Spinner from '../components/Spinner';
import ErrorView from '../components/ErrorView';
import TableEx from '../components/TableEx';

const StudentAdd = memo(() => {
    /** 저장 완료 후 목록으로 되돌아가기 위한 페이지 강제 이동 함수 생성 */
    const navigate = useNavigate();

    /** 리덕스 관련 초기화 */
    const dispatch = useDispatch();
    const { loading, error } = useSelector((state) => state.StudentSlice);    

    /** <form>의 submit 버튼이 눌러졌을 때 호출될 이벤트 핸들러 */
    const onStudentSubmit = useCallback((e) => {
        e.preventDefault();

        // 이벤트가 발생한 폼 객체
        const current = e.currentTarget;

        // 입력값에 대한 유효성 검사
        // ... 생략 ...

        // 리덕스를 통한 데이터 저장 요청.
        dispatch(postItem({
            name: current.name.value,
            userid: current.userid.value,
            grade: parseInt(current.grade.value),
            idnum: current.idnum.value,
            birthdate: current.birthdate.value,
            tel: current.tel.value,
            height: parseInt(current.height.value),
            weight: parseInt(current.weight.value),
            deptno: parseInt(current.deptno.value),
            profno: parseInt(current.profno.value)
        })).then((result) => {
            /** Slice의 `postItem.fulfilled`가 먼저 실행된 후 이곳이 실행된다. */
            // result.meta --> 백엔드에게 전송한 파라미터
            // result.payload --> 백엔드에게 전송받은 응답결과
            console.log(result);

            // 처리가 완료된 후 상세 페이지로 이동
            // --> 몇 번 데이터인지 path 파라미터로 전달한다.(querystring도 가능함)
            navigate(`/student_view/${result.payload.id}`);
        });
    }, []);
    
    return (
        <div>
            <Spinner loading={loading} />

            {error ? (
                <ErrorView error={error} />
            ) : (
                <form onSubmit={onStudentSubmit}>
                    <TableEx>
                        <colgroup>
                            <col width='120'>
                            </col>
                        </colgroup>
                        <tbody>
                            <tr>
                                <th>이름</th>
                                <td className="inputWrapper">
                                    <input className="field" type="text" name="name" />
                                </td>
                                </tr>
                            <tr>
                                <th>아이디</th>
                                <td className="inputWrapper">
                                    <input className="field" type="text" name="userid" />
                                </td>
                            </tr>
                            <tr>
                                <th>학년</th>
                                <td className="inputWrapper">
                                    <input className="field" type="number" name="grade" />
                                </td>
                            </tr>
                            <tr>
                                <th>주민번호</th>
                                <td className="inputWrapper">
                                    <input className="field" type="text" name="idnum" />
                                </td>
                                </tr>
                            <tr>
                                <th>생년월일</th>
                                <td className="inputWrapper">
                                    <input className="field" type="date" name="birthdate" />
                                </td>
                            </tr>
                            <tr>
                                <th>전화번호</th>
                                <td className="inputWrapper">
                                    <input className="field" type="text" name="tel" />
                                </td>
                            </tr>
                            <tr>
                                <th>키</th>
                                <td className="inputWrapper">
                                    <input className="field" type="number" name="height" />
                                </td>
                            </tr>
                            <tr>
                                <th>몸무게</th>
                                <td className="inputWrapper">
                                    <input className="field" type="number" name="weight" />
                                </td>
                            </tr>
                            <tr>
                                <th>학과번호</th>
                                <td className="inputWrapper">
                                    <input className="field" type="number" name="deptno" />
                                </td>
                            </tr>
                            <tr>
                                <th>profno</th>
                                <td className="inputWrapper">
                                    <input className="field" type="number" name="profno" />
                                </td>
                            </tr>
                        </tbody>
                    </TableEx>

                    <div style={{ textAlign: 'center' }}>
                        <button type='submit'>저장하기</button>
                    </div>
                </form>
            )}
        </div>
    );
});

export default StudentAdd;

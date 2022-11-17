 import React, { memo, useEffect, useMemo, useCallback } from 'react';
 import { useParams, useNavigate } from 'react-router-dom';
 import { useSelector, useDispatch } from 'react-redux';
 import { getCurrentData, getItem, putItem } from '../slices/StudentSlice';
 
 import Spinner from '../components/Spinner';
 import ErrorView from '../components/ErrorView';
 import TableEx from '../components/TableEx';

const StudentEdit = memo(() => {
    /** path 파라미터 받기 */
    const { id } = useParams();

    /** 리덕스 관련 초기화 */
    const dispatch = useDispatch();
    const { data, loading, error } = useSelector((state) => state.StudentSlice);

    /** 데이터 가져오기 */
    useEffect(() => {
        dispatch(getCurrentData());
    }, []);

    /** data값의 변경에 따른 사이드 이펙트 처리 */
    const item = useMemo(() => {
        if(data) {
            return data.find((v, i) => v.id == id);
        } else {
            // 새로 고침시 현재 데이터만 다시 로드함
            dispatch(getItem({id: id}));
        }
    }, [data]);

    /** 페이지 강제 이동을 처리하기 위한 navigate함수 생성 */
    const navigate = useNavigate();

    /** <form>의 submit 버튼이 눌러졌을 때 호출될 이벤트 핸들러 */
    const onStudentSubmit = useCallback((e) => {
        e.preventDefault();

        // 이벤트가 발생한 폼 객체
        const current = e.currentTarget;

        // 입력값에 대한 유효성 검사
        // ... 생략 ...

        // 리덕스를 통한 데이터 저장 요청.
        dispatch(putItem({
            id: current.id.value,
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
                    <input type='hidden' name='id' defaultValue={item?.id} />
                    <TableEx>
                        <colgroup>
                            <col width='120'>
                            </col>
                        </colgroup>
                        <tbody>
                            <tr>
                                <th>이름</th>
                                <td className="inputWrapper">
                                    <input className="field" type="text" name="name" defaultValue={item?.name} />
                                </td>
                                </tr>
                            <tr>
                                <th>아이디</th>
                                <td className="inputWrapper">
                                    <input className="field" type="text" name="userid" defaultValue={item?.userid} />
                                </td>
                            </tr>
                            <tr>
                                <th>학년</th>
                                <td className="inputWrapper">
                                    <input className="field" type="number" name="grade" defaultValue={item?.grade} />
                                </td>
                            </tr>
                            <tr>
                                <th>주민번호</th>
                                <td className="inputWrapper">
                                    <input className="field" type="text" name="idnum" defaultValue={item?.idnum} />
                                </td>
                                </tr>
                            <tr>
                                <th>생년월일</th>
                                <td className="inputWrapper">
                                    <input className="field" type="date" name="birthdate" defaultValue={item?.birthdate} />
                                </td>
                            </tr>
                            <tr>
                                <th>전화번호</th>
                                <td className="inputWrapper">
                                    <input className="field" type="text" name="tel" defaultValue={item?.tel} />
                                </td>
                            </tr>
                            <tr>
                                <th>키</th>
                                <td className="inputWrapper">
                                    <input className="field" type="number" name="height" defaultValue={item?.height} />
                                </td>
                            </tr>
                            <tr>
                                <th>몸무게</th>
                                <td className="inputWrapper">
                                    <input className="field" type="number" name="weight" defaultValue={item?.weight} />
                                </td>
                            </tr>
                            <tr>
                                <th>학과번호</th>
                                <td className="inputWrapper">
                                    <input className="field" type="number" name="deptno" defaultValue={item?.deptno} />
                                </td>
                            </tr>
                            <tr>
                                <th>profno</th>
                                <td className="inputWrapper">
                                    <input className="field" type="number" name="profno" defaultValue={item?.profno} />
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

export default StudentEdit;

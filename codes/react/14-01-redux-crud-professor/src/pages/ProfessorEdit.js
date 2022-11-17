 import React, { memo, useEffect, useMemo, useCallback } from 'react';
 import { useParams, useNavigate } from 'react-router-dom';
 import { useSelector, useDispatch } from 'react-redux';
 import { getCurrentData, getItem, putItem } from '../slices/ProfessorSlice';
 import { getList } from '../slices/DepartmentSlice';
 
 import Spinner from '../components/Spinner';
 import ErrorView from '../components/ErrorView';
 import TableEx from '../components/TableEx';

const ProfessorEdit = memo(() => {
    /** path 파라미터 받기 */
    const { id } = useParams();

    /** 리덕스 관련 초기화 */
    const dispatch = useDispatch();
    const { data: data1, loading: loading1, error } = useSelector((state) => state.ProfessorSlice);

    const { data: data2, loading: loading2 } = useSelector((state) => state.DepartmentSlice); 

    /** 데이터 가져오기 */
    useEffect(() => {
        dispatch(getCurrentData());
    }, []);

    /** 학과 데이터 가져오기 */
    useEffect(() => {
        dispatch(getList());
    }, []);

    /** data값의 변경에 따른 사이드 이펙트 처리 */
    const item = useMemo(() => {
        if(data1) {
            return data1.find((v, i) => v.id == id);
        } else {
            // 새로 고침시 현재 데이터만 다시 로드함
            dispatch(getItem({id: id}));
        }
    }, [data1]);

    /** 페이지 강제 이동을 처리하기 위한 navigate함수 생성 */
    const navigate = useNavigate();

    /** <form>의 submit 버튼이 눌러졌을 때 호출될 이벤트 핸들러 */
    const onProfessorSubmit = useCallback((e) => {
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
            position: current.position.value,
            sal: parseInt(current.sal.value),
            hiredate: current.hiredate.value,
            comm: parseInt(current.comm.value),
            deptno: parseInt(current.deptno.value)
        })).then((result) => {
            /** Slice의 `postItem.fulfilled`가 먼저 실행된 후 이곳이 실행된다. */
            // result.meta --> 백엔드에게 전송한 파라미터
            // result.payload --> 백엔드에게 전송받은 응답결과
            console.log(result);

            // 처리가 완료된 후 상세 페이지로 이동
            // --> 몇 번 데이터인지 path 파라미터로 전달한다.(querystring도 가능함)
            navigate(`/professor_view/${result.payload.id}`);
        });
    }, []);

    return (
        <div>
            <Spinner loading={loading1 || loading2} />

            {error ? (
                <ErrorView error={error} />
            ) : (
                <form onSubmit={onProfessorSubmit}>
                    <input type='hidden' name='id' defaultValue={item?.id} />
                    <TableEx style={{textAlign: 'left'}}>
                        <colgroup>
                            <col width='120' />
                            <col />
                        </colgroup>
                        <tbody>
                            <tr>
                                <th>이름</th>
                                <td className='inputWrapper'><input className='field' type='text' name='name' defaultValue={item.name} /></td>
                            </tr>
                            <tr>
                                <th>아이디</th>
                                <td className='inputWrapper'><input className='field' type='text' name='userid' defaultValue={item.userid} /></td>
                            </tr>
                            <tr>
                                <th>직급</th>
                                <td className='inputWrapper'>
                                    <label><input type='radio' name='position' value='교수' defaultChecked={item.position === '교수'} />교수</label>
                                    <label><input type='radio' name='position' value='부교수' defaultChecked={item.position === '부교수'} />부교수</label>
                                    <label><input type='radio' name='position' value='조교수' defaultChecked={item.position === '조교수'} />조교수</label>
                                    <label><input type='radio' name='position' value='전임강사' defaultChecked={item.position === '전임강사'} />전임강사</label>
                                </td>
                            </tr>
                            <tr>
                                <th>급여(만원)</th>
                                <td className='inputWrapper'>
                                    <input className='field' type='number' name='sal' placeholder='숫자만 입력' defaultValue={item.sal} />
                                </td>
                            </tr>
                            <tr>
                                <th>입사일</th>
                                <td className='inputWrapper'>
                                    <input className='field' type='date' name='hiredate' defaultValue={item.hiredate} />
                                </td>
                            </tr>
                            <tr>
                                <th>보직수당(만원)</th>
                                <td className='inputWrapper'>
                                    <input className='field' type='number' name='comm' placeholder='숫자만 입력' defaultValue={item.comm} />
                                </td>
                            </tr>
                            <tr>
                                <th>소속학과</th>
                                <td className='inputWrapper'>
                                    <select name='deptno' className='field' defaultValue={item.deptno}>
                                        <option value=''>{item.deptno}</option>
                                        {data2 && data2.map((v, i) => {
                                            return (
                                                <option key={i} value={v.id}>
                                                {v.dname}</option>
                                            )
                                        })}
                                    </select>
                                </td>
                            </tr>
                        </tbody>
                    </TableEx>

                    <div style={{ testAlign: 'center' }}>
                        <button type='submit'>저장하기</button>
                    </div>
                </form>
            )}
        </div>
    );
});

export default ProfessorEdit;

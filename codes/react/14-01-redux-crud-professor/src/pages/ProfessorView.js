/**
 * 이 작업을 수행하기 위해서는 '/slcies/ProfessorSlice.js' 가 먼저 선행 되어야 한다.
 */
import React, { memo, useEffect, useMemo, useCallback } from 'react';
import { NavLink, useNavigate, useParams } from 'react-router-dom';
import dayjs from 'dayjs';

import { useSelector, useDispatch } from 'react-redux';
import { getCurrentData, getItem, deleteItem } from '../slices/ProfessorSlice';

import Spinner from '../components/Spinner';
import ErrorView from '../components/ErrorView';
import Table from '../components/Table';

const ProfessorView = memo(() => {
    /** path 파라미터 받기 */
    const { id } = useParams();

    /** 리덕스 관련 초기화 */
    const dispatch = useDispatch();
    const { data, loading, error } = useSelector((state) => state.ProfessorSlice);

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

    /** 삭제 버튼에 대한 이벤트 리스너 */
    const onProfessorItemDelete = useCallback((e) => {
        e.preventDefault();

        const current = e.currentTarget;
        const { id, name } = current.dataset;

        if(window.confirm(`정말 ${name}(을)를 삭제하시겠습니까?`)) {
            dispatch(deleteItem({
                id: id
            })).then(({ meta, payload }) =>{
                // 삭제 후 목록 페이지로 이동
                navigate('/');
            });
        }
    }, []);

    return (
        <div>
            <Spinner loading={loading} />

            {error ? (
                <ErrorView error={error} />
            ) : (
                item && (
                    <div>
                        <Table>
                            <colgroup>
                                <col width='120'>
                                </col>
                            </colgroup>
                            <tbody>
                                <tr>
                                    <th>No.</th>
                                    <td>{item.id}</td>
                                </tr>
                                <tr>
                                    <th>이름</th>
                                    <td>{item.name}</td>
                                </tr>
                                <tr>
                                    <th>아이디</th>
                                    <td>{item.userid}</td>
                                </tr>
                                <tr>
                                    <th>직급</th>
                                    <td>{item.position}</td>
                                </tr>
                                <tr>
                                    <th>급여</th>
                                    <td>{item.sal}</td>
                                </tr>
                                <tr>
                                    <th>입사일</th>
                                    <td>{dayjs(item.hiredate).format('YYYY-MM-DD')}</td>
                                </tr>
                                <tr>
                                    <th>보직수당</th>
                                    <td>{item.comm}</td>
                                </tr>
                                <tr>
                                    <th>소속학과번호</th>
                                    <td>{item.deptno}</td>
                                </tr>
                            </tbody>
                        </Table>

                        <div style={{ textAlign: 'center' }}>
                            <NavLink to='/'>목록</NavLink>
                            &nbsp;|&nbsp;
                            <NavLink to='/professor_add'>등록</NavLink>
                            &nbsp;|&nbsp;
                            <NavLink to={`/professor_edit/${item.id}`}>수정</NavLink>
                            &nbsp;|&nbsp;
                            <NavLink to='#!' data-id={item.id} data-name={item.name} onClick={onProfessorItemDelete}>삭제</NavLink>
                        </div>
                    </div>
                )
            )}
        </div>
    );
});

export default ProfessorView;

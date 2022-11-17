import React, { memo, useEffect, useCallback } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

import styled from 'styled-components';
import dayjs from 'dayjs';

import Spinner from '../components/Spinner';
import ErrorView from '../components/ErrorView';
import Table from '../components/Table';

import { useSelector, useDispatch } from 'react-redux';
import { deleteItem, getList } from '../slices/StudentSlice';

import { useQueryString } from '../hooks/useQueryString';

// 입력 컨트롤들을 포함하는 박스
const ControlContainer = styled.form`
    position: sticky;
    top: 0;
    background-color: #fff;
    border-top: 1px solid #eee;
    border-bottom: 1px solid #eee;
    padding: 10px 0;

    .controll {
        margin-right: 5px;
        display: inline-block;
        font-size: 16px;
        padding: 7px 10px 5px 10px;
        border: 1px solid #ccc;
    }

    .clickable {
        background-color: #fff;
        color: #000;
        text-decoration: none;
        cursor: pointer;

        &:hover {
            background-color: #06f2;
        }

        &:active {
            transform: scale(0.9, 0.9);
        }
    }
`;

const StudentList = memo(() => {
    /** QueryString 변수 받기 */
    const { keyword } = useQueryString();
    // console.log(keyword);

    /** 리덕스 관련 초기화 */
    const dispatch = useDispatch();
    const { data, loading, error } = useSelector((state) => state.StudentSlice);

    /** 최초 마운트시 리덕스를 통해 목록을 조회한다. */
    useEffect(() => {
        dispatch(getList({
            keyword: keyword
        }));
    }, [keyword]);

    /** 페이지 강제 이동을 처리하기 위한 navigate함수 생성 */
    const navigate = useNavigate();

    /** 검색 이벤트 */
    const onSearchSubmit = useCallback((e) => {
        e.preventDefault();

        const current = e.currentTarget;
        const keyword = current.keyword;
        // console.log(keyword.value);
        //navigate(`/?keyword=${keyword.value}`);
        let redirectUrl = keyword.value ? `/?keyword=${keyword.value}` : '/';
        navigate(redirectUrl);
    }, [navigate]);

    /** 삭제 버튼에 대한 이벤트 리스너 */
    const onStudentItemDelete = useCallback((e) => {
        e.preventDefault();

        const current = e.currentTarget;
        const { id, name } = current.dataset;

        if(window.confirm(`정말 ${name}(을)를 삭제하시겠습니까?`)) {
            dispatch(deleteItem({
                id: id
            }));
        }
    }, []);

    /** 수정 버튼에 대한 이벤트 리스너 */
    const onStudentEditClick = useCallback((e) => {
        e.preventDefault();

        const current = e.currentTarget;
        const { id } = current.dataset;

        navigate(`/student_edit/${id}`);
    });

    return (
        <div>
            {/* 로딩바 */}
            <Spinner loading={loading} />

            {/* 검색폼 */}
            <ControlContainer onSubmit={onSearchSubmit}>
                <input type='text' name='keyword' className='controll' />
                <button type='submit' className='controll clickable'>검색</button>
                <NavLink to='student_add' className='controll clickable'>학생정보 추가하기</NavLink>
            </ControlContainer>

            {/* 조회 결과 표시하기 */}
            {error ? (
                <ErrorView error={error} />
            ) : (
                // Ajax 처리 결과가 존재할 경우
                data && (
                    <Table>
                        <thead>
                            <tr>
                                <th>학생번호</th>
                                <th>이름</th>
                                <th>아이디</th>
                                <th>학년</th>
                                <th>주민번호</th>
                                <th>생년월일</th>
                                <th>전화번호</th>
                                <th>키</th>
                                <th>몸무게</th>
                                <th>학과번호</th>
                                <th>profno</th>
                                <th>삭제</th>
                                <th>수정</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                // 처리 결과는 존재 하지만 데이터 수가 0건 인 경우와 그렇지 않은 경우를 구분
                                data.length > 0 ? (
                                    data.map(({id, name, userid, grade, idnum, birthdate, tel, height, weight, deptno, profno}, i) => {
                                        return (
                                            <tr key={id}>
                                                <td>{id}</td>
                                                <td>
                                                    <NavLink to={`/student_view/${id}`}>{name}</NavLink>
                                                </td>
                                                <td>{userid}</td>
                                                <td>{grade}학년</td>
                                                <td>{idnum}</td>
                                                <td>{dayjs(birthdate).format('YYYY-MM-DD')}</td>
                                                <td>{tel}</td>
                                                <td>{height}cm</td>
                                                <td>{weight}kg</td>
                                                <td>{deptno}</td>
                                                <td>{profno}</td>
                                                <td>
                                                    <button className="button" type="button" data-id={id} onClick={onStudentEditClick}>
                                                        수정하기
                                                    </button>
                                                </td>
                                                <td>
                                                    <button type='button' data-id={id} data-name={name} onClick={onStudentItemDelete}>
                                                        삭제하기
                                                    </button>
                                                </td>
                                            </tr>
                                        )
                                    })
                                ) : (
                                    <tr>
                                        <td colSpan='5' align='center'>
                                            검색결과가 없습니다.
                                        </td>
                                    </tr>
                                )}
                        </tbody>
                    </Table>
                )
            )}
        </div>
    );
});

export default StudentList;

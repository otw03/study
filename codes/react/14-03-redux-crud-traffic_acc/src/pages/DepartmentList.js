import React, { memo, useEffect, useCallback } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

import Spinner from '../components/Spinner';
import ErrorView from '../components/ErrorView';
import Table from '../components/Table';

import { useSelector, useDispatch } from 'react-redux';
import { deleteItem, getList } from '../slices/DepartmentSlice';

import styled from 'styled-components';

import { useQueryString } from '../hooks/useQueryString';

// 입력 컨트롤들을 포함하는 박스
const ControlContainer = styled.form`
    position: sticky;

    .controll {

    }

    .clickable {


        &:hover {

        }

        &:active {

        }
    }
`;

const DepartmentList = memo(() => {
    /** QueryString 변수 받기 */
    const { keyword } = useQueryString();
    // console.log(keyword);

    /** 리덕스 관련 초기화 */
    const dispatch = useDispatch();
    const { data, loading, error } = useSelector((state) => state.DepartmentSlice);

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
    const onDepartmentItemDelete = useCallback((e) => {
        e.preventDefault();

        const current = e.currentTarget;
        const { id, dname } = current.dataset;

        if(window.confirm(`정말 ${dname}(을)를 삭제하시겠습니까?`)) {
            dispatch(deleteItem({
                id: id
            }));
        }
    }, []);

    /** 수정 버튼에 대한 이벤트 리스너 */
    const onDepartmentEditClick = useCallback((e) => {
        e.preventDefault();

        const current = e.currentTarget;
        const { id } = current.dataset;

        navigate(`/department_edit/${id}`);
    });

    return (
        <div>
            {/* 로딩바 */}
            <Spinner loading={loading} />

            {/* 검색폼 */}
            <ControlContainer onSubmit={onSearchSubmit}>
                <input type='text' name='keyword' className='controll' />
                <button type='submit' className='controll clickable'>검색</button>
                <NavLink to='department_add' className='controll clickable'>학과정보 추가하기</NavLink>
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
                                <th>학과번호</th>
                                <th>학과명</th>
                                <th>학과위치</th>
                                <th>수정</th>
                                <th>삭제</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                // 처리 결과는 존재 하지만 데이터 수가 0건 인 경우와 그렇지 않은 경우를 구분
                                data.length > 0 ? (
                                    data.map((v, i) => {
                                        return (
                                            <tr key={v.id}>
                                                <td>{v.id}</td>
                                                <td>
                                                    <NavLink to={`/department_view/${v.id}`}>{v.dname}</NavLink>
                                                </td>
                                                <td>{v.loc}</td>
                                                <td>
                                                    <button type='button' data-id={v.id} onClick={onDepartmentEditClick}>
                                                        수정하기
                                                    </button>
                                                </td>
                                                <td>
                                                    <button type='button' data-id={v.id} data-dname={v.dname} onClick={onDepartmentItemDelete}>
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

export default DepartmentList;

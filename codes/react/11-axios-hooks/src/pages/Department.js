import React, {memo, useState, useEffect, useCallback} from 'react';
import axios from 'axios';
import Spinner from '../components/Spinner';

import { useLocation, useNavigate } from 'react-router-dom';

const Department = memo(() => {
    // 현재 ajax가 데이터를 로딩중인지를 의미하는 상태값
    const [loading, setLoading] = useState(false);
    // 화면에 표시할 상태값(ajax 연동 결과로 받아올 json) -> 초기값을 빈 배열로 정의
    const [department, setDepartment] = useState([]);
    // 수정할 항목에 대한 id값을 저장하기 위한 상태값
    const [updateId, setupdateId] = useState(-1);

    // QueryString으로 전달되는 검색 키워드를 받는다
    const { search } = useLocation();
    // QueryString을 객체로 변환 --> ? 이후의 변수들을 이 객체 안에 분리해서 저장
    const query = new URLSearchParams(search);
    const { keyword } = Object.fromEntries(query);

    // 페이지 강제 이동을 위한 객체 생성
    const navigate = useNavigate();

    /** 페이지가 처음 열렸을 때 실행할 hook */
    // hook에 전달되는 콜백함수에 직접적으로 async를 적용할 수 없다.(https://developer-talk.tistory.com/250)
    //useEffect(async () => {
    useEffect(() => {
        // async~await 처리를 위한 즉시 실행 함수 정의
        (async () => {
            // Ajax 로딩 시작을 알림
            setLoading(true);

            // ajax의 결과를 저장할 변수 준비
            let json = null;

            try {
                // Frontend의 URL은 `http://localhost:3000/~~~" 이고 Backend의 URL은 "http://localhost:3001"(json-server포트번호3001설정된 상태)인 상태로 가동된다.
                // 이 경우 도메인과 포트번호의 조합이 완벽하게 일치하지 않기 때문에 웹브라우저에서 CORS 문제가 발생하여연동이 되지 않는다.
                // package.json파일에 proxy 설정을 추가(리액트 안에 내장된 노드.js가 1개 사이트(1개의 백엔드)에 한해서 proxy를 허용해준다)
                // --> http://localhost:3001 주소를 현재 사이트로 인식
                // 수정 전 API 접근 URL
                // --> http://localhost:3001/department
                // 수정 후 API 접근 cdURL
                // --> /department
                const response = await axios.get("/department", {
                    // 검색어가 있다면 dname값으로 설정, 그렇지 않으면 정의 안 함
                    params: keyword ? {dname: keyword} : null
                });
                json = response.data;
            } catch (e) {
                console.error(e);
                alert(`데이터 요청에 실패했습니다. \n ${e.message}`);
                return;
            } finally {
                // Ajax 로딩 종료
                setLoading(false);
            }

            // Ajax의 요청 결과를 상태값에 반영한다.
            setDepartment(json);
        })();
        // 검색어가 변경되었을 경우에도 Ajax요청을 보내도록 추가한다.
    }, [keyword]);

    /** 검색폼에서의 전송 이벤트 */
// navigate(: useNavigate()) => history.push 와 비슷한 기능 : 브라우저의 url을 변경해준다
// url 변경 => 모든 컴포넌트 재실행
// 리액트는 App.js 부터 모든 컴포넌트가 전부 재실행된다
// memo()로 감싸놓은 내용들은 바뀌는 내용이 없으면 재실행되지 않는다
// 재실행되는 과정의 url의 키워드를 넘겨줌
    // 성능 최적화를 위해 useCallback() 적용함
    const onSearchSubmit = useCallback((e) => {
        e.preventDefault();
        console.log("submit~!!");
        // 검색어를 QueryString으로 저장하여 페이지를 이동한다.
        navigate(`/department?keyword=${e.currentTarget.keyword.value}`)
    }, [navigate]);

    /** 데이터 추가 submit 이벤트 */
    const onDataAddSubmit = useCallback((e) => {
        // 페이지 강제 이동을 차단
        e.preventDefault();

        // 이벤트가 발생한 폼 자신
        const form = e.currentTarget;

        // 폼 안의 input태그에 name속성으로 접근하여 입력값 취득
        const dname = form.dname.value;
        const loc = form.loc.value;

        /** 입력값에 대한 유효성 검사가 들어가야 하지만 생략... */

        (async () => {
            // Ajax 로딩 시작을 알림 --> 함수형 업데이트
            setLoading(true);

            // ajax의 결과를 저장할 변수 준지
            let json = null;

            try {
                const response = await axios.post("/department", {
                    dname: dname,
                    loc: loc,
                });
                json = response.data;

                console.group('데이터 저장 결과');
                console.log(json);
                console.groupEnd()
            } catch (e) {
                alert(`데이터 저장에 실패했습니다. \n${e.message}`);
                return;
            } finally {
                // Ajax 로딩 종료를 알림 --> 함수형 업데이트
                setLoading(false);
            }

            // Ajax 요청 결과를 상태값에 반영한다. --> 함수형 업데이트
            setDepartment(department => department.concat(json));

            // 폼의 입력값을 리셋한다.
            form.reset();
        })();

    }, []);

    /** 데이터 삭제 버튼 click 이벤트 */
    const onDataDeleteClick = useCallback((e) => {
        // 클릭된 자기 자신
        const current = e.currentTarget;
        // 클릭된 자신에게 숨어 있는 data-id값을 추출
        const id = parseInt(current.dataset.id);
        console.log(`삭제 대상의 id값: ${id}`);

        // 삭제 요청을 위한 Ajax 처리
        (async () => {
            // Ajax 로딩 시작을 알림 --> 함수형 업데이트
            setLoading(true);

            try {
                // 삭제할 경우 Ajax의 응답 결과가 필요 없다.
                await axios.delete(`/department/${id}`);
            } catch (e) {
                alert(`데이터 삭제에 실패했습니다. \n${e.message}`);
                return;
            } finally {
                // Ajax 로딩 종료를 알림 --> 함수형 업데이트
                setLoading(false);
            }

            // Ajax 삭제처리가 완료되면 프론트엔드가 가지고 있던
            // 복사본(department 상태값)에서도 동일한 항목을 찾아 제거해야 한다.
            setDepartment(department => {
                const dropId = department.findIndex((v, i) => {
                    return v.id === id;
                });
                console.log(`제거할 대상의 배열 인덱스: ${dropId}`);

                // 상태값이 배열이므로 인덱스 번호가 dropId인 위치에서 1개의 데이터를 제거
                department.splice(dropId, 1);

                // 제거 결과를 리턴
                return department;
            });
        })();
    });

    /** 데이터 수정 버튼 click 이벤트 */
    const onDataEditClick = useCallback((e) => {
        e.preventDefault();
        // 수정할 항목에 대한 인덱스 번호를 상태값을 설정한다.
        const current = e.currentTarget;
        const id = parseInt(current.dataset.id);
        setupdateId(id);
    }, []);

    // 삭제, 수정할 때는 어떤 항목에 대한 삭제, 수정하는지 알려줘야 한다.
    /** 데이터 수정사항 저장 버튼 click 이벤트 */
    const onDataEditSubmit = useCallback((e) => {
        e.preventDefault();

        // 이벤트가 발생한 <form> 요소 취득
        const current = e.target;

        // <form>요소 내의 <input> 요소들을 name속성값으로 접근하여 입력값을 얻음
        const id = current.id.value;
        const dname = current.dname.value;
        const loc = current.loc.value;

        /** 입력값에 대한 유효성 검사가 들어가야 하지만 생략... */

        // 백엔드에 데이터가 수정되었음을 알린다.
        (async () => {
            // Ajax 로딩 시작을 알림
            setLoading(true);

            // 수정 결과에 대한 json
            let json = null;
            
            // Ajax를 통한 데이터 삭제 요청
            try {
                const response = await axios.put(`/department/${id}`, {
                    dname: dname,
                    loc: loc,
                });

                // 수정 결과에 대한 json 받음
                json = response.data;
                // console.log(json);
            } catch (e) {
                console.error(e);
                alert(`데이터 수정에 실패했습니다.\n${e.message}`);
                return;
            } finally {
                // Ajax 로딩 종료를 알림
                setLoading(false);
            }

            // 수정 결과로 원본 배열의 원소를 교체한다.
            setDepartment(department => {
                // 원본 상태값과 비교하여 수정된 항목의 배열 인덱스를 찾는다.
                // console.log(json.id);
                const editId = department.findIndex((v, i) => v.id === json.id);
                console.log(`제거할 대상의 배열 인덱스: ${editId}`);
                
                // 상태값이 배열이므로 인덱스 번호가 editId인 위치에서 1개의 데이터를 교체
                department.splice(editId, 1, json);

                // 수정된 배열을 리턴한다.
                return department;
            });
        })();

        // 상태변수를 되돌린다.
        setupdateId(-1);
    }, []);

    return (
        <div>
            <Spinner loading={loading} />
            
            {/* 입력폼 */}
            <form onSubmit={onDataAddSubmit}>
                <div>
                    <label htmlFor='dname'>학과: </label>
                    <input type='text' name='dname' id='dname' />
                </div>
                <div>
                    <label htmlFor='loc'>위치: </label>
                    <input type='text' name='loc' id='loc' />
                </div>
                <button type='submit'>저장하기</button>
            </form>

            {/* 검색용 */}
            <form onSubmit={onSearchSubmit}>
                <input type='text' name='keyword' />
                <button type='submit'>검색</button>
            </form>

            <form onSubmit={onDataEditSubmit}>
                <table border='1'>
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
                        {!department.length ? (
                            <tr>
                                <td colSpan='5' align='center'>
                                    검색결과가 없습니다.
                                </td>
                            </tr>
                        ) : (
                            department.map((item, index) => {
                                // 상태값이 저장되어 있는 수정할 항목의 인덱스에 해당하는 원소라면?
                                if(item.id === updateId) {
                                    return (
                                        <tr key={item.id}>
                                            {/* 수정을 위한 <input>요소를 표시 */}
                                            {/* hidden에는 고유식별값(id, PK) 이 들어가야 한다. */}
                                            <input type='hidden' name='id' defaultValue={item.id} />
                                            <td>{item.id}</td>
                                            <td><input type='text' name='dname' defaultValue={item.dname} /></td>
                                            <td><input type='text' name='loc' defaultValue={item.loc} /></td>
                                            <td colSpan='2'>
                                                <button type='submit'>
                                                    수정사항 저장
                                                </button>
                                            </td>
                                        </tr>
                                    )
                                } else {
                                    return (
                                        <tr key={item.id}>
                                            {/* 데이터를 텍스트로 출력 */}
                                            <td>{item.id}</td>
                                            <td>{item.dname}</td>
                                            <td>{item.loc}</td>
                                            <td>
                                                <button type='button' data-id={item.id} onClick={onDataEditClick}>수정하기</button>
                                            </td>
                                            <td><button type='button' data-id={item.id} onClick={onDataDeleteClick}>삭제하기</button></td>
                                        </tr>
                                    )
                                }
                            })
                        )}
                    </tbody>
                </table>
            </form>
        </div>
    );
});

export default Department;

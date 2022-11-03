import React, {memo, useState, useEffect, useCallback} from 'react';
import axios from 'axios';
import Spinner from '../components/Spinner';
import dayjs from 'dayjs';
import RegexHelper from '../helper/RegexHelper';

import { useLocation, useNavigate } from 'react-router-dom';

const Professor = memo(() => {
    // 현재 ajax가 데이터를 로딩중인지를 의미하는 상태값
    const [loading, setLoading] = useState(false);
    // 화면에 표시할 상태값(ajax 연동 결과로 받아올 json) -> 초기값을 빈 배열로 정의
    const [professor, setProfessor] = useState([]);
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
                // Frontend의 URL은 `http://deptnoalhost:3000/~~~" 이고 Backend의 URL은 "http://deptnoalhost:3001"(json-server포트번호3001설정된 상태)인 상태로 가동된다.
                // 이 경우 도메인과 포트번호의 조합이 완벽하게 일치하지 않기 때문에 웹브라우저에서 CORS 문제가 발생하여연동이 되지 않는다.
                // package.json파일에 proxy 설정을 추가(리액트 안에 내장된 노드.js가 1개 사이트(1개의 백엔드)에 한해서 proxy를 허용해준다)
                // --> http://deptnoalhost:3001 주소를 현재 사이트로 인식
                // 수정 전 API 접근 URL
                // --> http://deptnoalhost:3001/professor
                // 수정 후 API 접근 cdURL
                // --> /professor
                const response = await axios.get("/professor", {
                    // 검색어가 있다면 name값으로 설정, 그렇지 않으면 정의 안 함
                    params: keyword ? {name: keyword} : null
                    
                });
                json = response.data;
                console.log(json[5].hiredate);
                console.log(dayjs(json[5].hiredate).format('YYYY/MM/DD HH:mm:ss a'));
            } catch (e) {
                console.error(e);
                alert(`데이터 요청에 실패했습니다. \n ${e.message}`);
                return;
            } finally {
                // Ajax 로딩 종료
                setLoading(false);
            }

            // Ajax의 요청 결과를 상태값에 반영한다.
            setProfessor(json);
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
        navigate(`/professor?keyword=${e.currentTarget.keyword.value}`)
    }, [navigate]);

    /** 데이터 추가 submit 이벤트 */
    const onDataAddSubmit = useCallback((e) => {
        // 페이지 강제 이동을 차단
        e.preventDefault();

        // 이벤트가 발생한 폼 자신
        const form = e.currentTarget;

        // 폼 안의 input태그에 name속성으로 접근하여 입력값 취득
        const name = form.name.value;
        const userid = form.userid.value;
        const position = form.position.value;
        const sal = form.sal.value;
        const hiredate = form.hiredate.value;
        const comm = form.comm.value;
        const deptno = form.deptno.value;


        /** 입력값에 대한 유효성 검사 */
        const regexHelper = RegexHelper.getInstance();
        try {
            /** 이름 검사*/
            regexHelper.value(form.name, '이름을 입력하세요.');

            /** 아이디 검사 */
            // 입력여부
            regexHelper.value(form.userid, '아이디를 입력하세요.');
            // 영어,숫자만 가능
            regexHelper.engNum(form.userid, '아이디는 영어,숫자만로만 생성가능합니다.');
            // 최대 글자수 초과 여부
            regexHelper.maxLength(form.userid,20 , '최대 글자수를 초과했습니다. 아이디는 20글자까지만 가능합니다.');

            /** 직책 검사 */
            regexHelper.value(form.position, '직책을 입력하세요.');

            /** 월급 검사 */
            regexHelper.value(form.sal, '급여를 입력하세요.');

            /** 입사날짜 검사 */
            regexHelper.value(form.hiredate, '입사날짜을 입력하세요.');

            /** 학과번호 검사 */
            regexHelper.value(form.deptno, '사무실을 입력하세요.');
        } catch (e) {
            alert(e.message);
            console.error(e);
            e.selector.focus();
            return;
        }


        (async () => {
            // Ajax 로딩 시작을 알림 --> 함수형 업데이트
            setLoading(true);

            // ajax의 결과를 저장할 변수 준지
            let json = null;

            try {
                const response = await axios.post("/professor", {
                    name: name,
                    userid: userid,
                    position: position,
                    sal: sal,
                    hiredate: hiredate,
                    comm: comm,
                    deptno: deptno,
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
            setProfessor(professor => professor.concat(json));

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
                await axios.delete(`/professor/${id}`);
            } catch (e) {
                alert(`데이터 삭제에 실패했습니다. \n${e.message}`);
                return;
            } finally {
                // Ajax 로딩 종료를 알림 --> 함수형 업데이트
                setLoading(false);
            }

            // Ajax 삭제처리가 완료되면 프론트엔드가 가지고 있던
            // 복사본(professor 상태값)에서도 동일한 항목을 찾아 제거해야 한다.
            setProfessor(professor => {
                const dropId = professor.findIndex((v, i) => {
                    return v.id === id;
                });
                console.log(`제거할 대상의 배열 인덱스: ${dropId}`);

                // 상태값이 배열이므로 인덱스 번호가 dropId인 위치에서 1개의 데이터를 제거
                professor.splice(dropId, 1);

                // 제거 결과를 리턴
                return professor;
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
        const name = current.name.value;
        const userid = current.userid.value;
        const position = current.position.value;
        const sal = current.sal.value;
        const hiredate = current.hiredate.value;
        const comm = current.comm.value;
        const deptno = current.deptno.value;

        /** 입력값에 대한 유효성 검사 */
        const regexHelper = RegexHelper.getInstance();
        try {
            /** 이름 검사*/
            regexHelper.value(current.name, '이름을 입력하세요.');

            /** 아이디 검사 */
            // 입력여부
            regexHelper.value(current.userid, '아이디를 입력하세요.');
            // 영어,숫자만 가능
            regexHelper.engNum(current.userid, '아이디는 영어,숫자만로만 생성가능합니다.');
            // 최대 글자수 초과 여부
            regexHelper.maxLength(current.userid,20 , '최대 글자수를 초과했습니다. 아이디는 20글자까지만 가능합니다.');

            /** 직책 검사 */
            regexHelper.value(current.position, '직책을 입력하세요.');

            /** 월급 검사 */
            regexHelper.value(current.sal, '급여를 입력하세요.');

            /** 입사날짜 검사 */
            regexHelper.value(current.hiredate, '입사날짜을 입력하세요.');

            /** 학과번호 검사 */
            regexHelper.value(current.deptno, '사무실을 입력하세요.');
        } catch (e) {
            alert(e.message);
            console.error(e);
            e.selector.focus();
            return;
        }

        // 백엔드에 데이터가 수정되었음을 알린다.
        (async () => {
            // Ajax 로딩 시작을 알림
            setLoading(true);

            // 수정 결과에 대한 json
            let json = null;
            
            // Ajax를 통한 데이터 삭제 요청
            try {
                const response = await axios.put(`/professor/${id}`, {
                    name: name,
                    userid: userid,
                    position: position,
                    sal: sal,
                    hiredate: hiredate,
                    comm: comm,
                    deptno: deptno,
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
            setProfessor(professor => {
                // 원본 상태값과 비교하여 수정된 항목의 배열 인덱스를 찾는다.
                // console.log(json.id);
                const editId = professor.findIndex((v, i) => v.id === json.id);
                console.log(`제거할 대상의 배열 인덱스: ${editId}`);
                
                // 상태값이 배열이므로 인덱스 번호가 editId인 위치에서 1개의 데이터를 교체
                professor.splice(editId, 1, json);

                // 수정된 배열을 리턴한다.
                return professor;
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
                    <label htmlFor='name'>이름: </label>
                    <input type='text' name='name' id='name' />
                </div>
                <div>
                    <label htmlFor='userid'>아이디: </label>
                    <input type='text' name='userid' id='userid' />
                </div>
                <div>
                    <label htmlFor='position'>직책: </label>
                    <input type='text' name='position' id='position' />
                </div>
                <div>
                    <label htmlFor='sal'>급여: </label>
                    <input type='text' name='sal' id='sal' />
                </div>
                <div>
                    <label htmlFor='hiredate'>부임일: </label>
                    <input type='text' name='hiredate' id='hiredate' />
                </div>
                <div>
                    <label htmlFor='comm'>커미션: </label>
                    <input type='text' name='comm' id='comm' />
                </div>
                <div>
                    <label htmlFor='deptno'>사무실: </label>
                    <input type='text' name='deptno' id='deptno' />
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
                            <th>교수번호</th>
                            <th>이름</th>
                            <th>아이디</th>
                            <th>직책</th>
                            <th>급여</th>
                            <th>부임일</th>
                            <th>커미션</th>
                            <th>사무실</th>
                            <th>수정</th>
                            <th>삭제</th>
                        </tr>
                    </thead>
                    <tbody>
                        {!professor.length ? (
                            <tr>
                                <td colSpan='8' align='center'>
                                    검색결과가 없습니다.
                                </td>
                            </tr>
                        ) : (
                            professor.map((item, index) => {
                                // 상태값이 저장되어 있는 수정할 항목의 인덱스에 해당하는 원소라면?
                                if(item.id === updateId) {
                                    return (
                                        <tr key={item.id}>
                                            {/* 수정을 위한 <input>요소를 표시 */}
                                            {/* hidden에는 고유식별값(id, PK) 이 들어가야 한다. */}
                                            <input type='hidden' name='id' defaultValue={item.id} />
                                            <td>{item.id}</td>
                                            <td><input type='text' name='name' defaultValue={item.name} /></td>
                                            <td><input type='text' name='userid' defaultValue={item.userid} /></td>
                                            <td><input type='text' name='position' defaultValue={item.position} /></td>
                                            <td><input type='text' name='sal' defaultValue={item.sal} /></td>
                                            <td><input type='text' name='hiredate' defaultValue={item.hiredate} /></td>
                                            <td><input type='text' name='comm' defaultValue={item.comm} /></td>
                                            <td><input type='text' name='deptno' defaultValue={item.deptno} /></td>
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
                                            <td>{item.name}</td>
                                            <td>{item.userid}</td>
                                            <td>{item.position}</td>
                                            <td>{item.sal}</td>
                                            <td>{item.hiredate}</td>
                                            <td>{item.comm}</td>
                                            <td>{item.deptno}</td>
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

export default Professor;

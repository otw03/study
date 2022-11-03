import React, {memo, useState, useEffect} from 'react';
import axios from 'axios';
import NewsList from '../components/NewsList';
import Spinner from '../components/Spinner';

const News = memo(() => {
    // 화면에 표시할 상태값(ajax 연동 결과로 받아올 json) -> 초기값을 빈 배열로 정의
    // Ajax 처리는 비동기이므로 데이터를 받아오는 처리의 완료 여부와 상관 없이 화면 출력이 먼저 수행된다.
    // 그러므로 Ajax의 결과를 상태값에 저장하여 데이터를 받아온 후 화면이 자동 갱신되도록 처리해야 한다.
    const [newslist, setNewsList] = useState([]);
    // 현재 ajax가 데이터를 로딩중인지를 의미하는 상태값
    const [loading, setLoading] = useState(false);

    /** 페이지가 처음 열렸을 때 실행할 hook */
    // hook에 전달되는 콜백함수에 직접적으로 async를 적용할 수 없다.
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
                // --> http://localhost:3001/news
                // 수정 후 API 접근 URL
                // --> /news
                const response = await axios.get("/news");
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
            setNewsList(json);
        })();
    }, []);

    return (
        <div>
            <Spinner loading={loading} />
            <NewsList news={newslist} />
        </div>
    );
});

export default News;

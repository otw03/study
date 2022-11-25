import React, { memo, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";

const Top = memo(() => {

  /** 페이지 강제 이동을 처리하기 위한 navigate함수 생성 */
  const navigate = useNavigate();

  /** 날짜 검색할 때 이벤트 */
  const onSearchSubmit = useCallback((e) => {
    e.preventDefault();

    const current = e.currentTarget;
    // 시작 날짜
    const gte = current.gte;
    // console.log(gte);
    // 종료 날짜
    const lte = current.lte;
    // console.log(lte);
    // navigate(`/covid19/confirmed?gte=${gte.value}&lte=${lte.value}`)
    let redirectUrl = gte.value && lte.value ? `covid19/confirmed?gte=${gte.value}&lte=${lte.value}` : "/";
    navigate(redirectUrl); // url 변경
  }, [])

  return (
    <div>
      <h1>
        <Link style={{textDecoration: 'none', color: 'black'}} to="/">Covid19 현황</Link>
      </h1>
      <hr />
      <form onSubmit={onSearchSubmit}>
        <input type="date" name="gte" />
        ~
        <input type="date" name="lte" />
        <button type="submit">검색</button>
      </form>
      <hr />
    </div>
  );
});

export default Top;

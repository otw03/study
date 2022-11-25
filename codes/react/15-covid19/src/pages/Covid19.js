import React, { memo, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';

import Spinner from "../components/Spinner";
import ErrorView from "../components/ErrorView";
import MenuLink from "../components/MenuLink";
import LineChartView from "../components/LineChartView";

import Meta from "../Meta";

import { useQueryString } from '../hooks/useQueryString';

import { getList } from "../slices/Covid19Slice";


const Covid19 = memo(() => {
    /** queryString 변수 받기 */  
    const { gte, lte } = useQueryString();
    console.log(gte, lte);

    /** url의 경로와 변수값 구조분해 */
    const { search, pathname } = useLocation();
    console.log(search);
    console.log(pathname);

    /** 메뉴 변수 경로값 */
    const menu = pathname.slice(9);
    console.log(menu);

    /** 리덕스 관련 초기화 */
    const dispatch = useDispatch();
    const { data, loading, error } = useSelector((state) => state.Covid19Slice);
    console.log(data);

    /** 최초 마운트시 리덕스를 통해 목록을 조회한다.
     * 날짜값이 변경된 경우 리덕스 액션함수 디스패치 --> Ajax 호출
     */
    useEffect(() => {
        dispatch(getList({
            gte: gte,
            lte: lte
        }));
    }, [gte, lte]);


    return (
    <>
        <Meta title="Covid19 Status :: Chart" description="Chart Data" />

        <nav>
            <MenuLink to={`/covid19/confirmed${search}`}>일일확진자</MenuLink>
            <MenuLink to={`/covid19/confirmed_acc${search}`}>누적확진자</MenuLink>
            <MenuLink to={`/covid19/active${search}`}>격리환자</MenuLink>
            <MenuLink to={`/covid19/released${search}`}>격리해제</MenuLink>
            <MenuLink to={`/covid19/released_acc${search}`}>누적격리해제</MenuLink>
            <MenuLink to={`/covid19/death${search}`}>사망자</MenuLink>
            <MenuLink to={`/covid19/death_acc${search}`}>누적사망자</MenuLink>
        </nav>

        <Spinner loading={loading} />
        {Array.isArray(data) && data.length === 0 ? (
            <h1>해당 기간의 데이터가 없습니다.</h1>
        ) : error ? (
            <ErrorView error={error} />
        ) : (
            data && <LineChartView covid19={data} category={menu} />
        )}
    </>
    );
});

export default Covid19;

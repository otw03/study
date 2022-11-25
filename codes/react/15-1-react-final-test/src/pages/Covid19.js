import React, {useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getCovid19Data } from '../slices/Covid19Slice';

import { useParams } from 'react-router-dom';
import { useQueryString } from '../hooks/useQueryString';

import Spinner from '../components/Spinner';
import ErrorView from '../components/ErrorView';
import MenuLink from '../components/MenuLink';
import LineChartView from '../components/LineChartView';

import dayjs from 'dayjs';

const Covid19 = () => {
    const dispatch = useDispatch();
    const { data, loading, error } = useSelector((state) => state.Covid19Slice);

    const [ chartData, setChartData ] = useState();
    const { startDate, endDate } = useQueryString();
    const { category } = useParams();

    React.useEffect(() => {
        if (startDate && endDate) {
            dispatch(getCovid19Data({
                startDate: startDate,
                endDate: dayjs(endDate).add(1, 'd').toISOString()
            }));
        }
    }, [startDate, endDate]);

    React.useEffect(() => {
        if (data) {
            setChartData(chartData => {
                const newData = {date: [], value: []};

                data.forEach((v, i) => {
                    newData.date.push(dayjs(v.date).format('MM/DD'));
                    newData.value.push(v[category]);
                });

                return newData;
            });
        }
    }, [data, category]);

    return (
        <div>
            <Spinner loading={loading} />

            {(startDate && endDate) && (
                <nav>
                    <MenuLink to={`/confirmed?startDate=${startDate}&endDate=${endDate}`}>일일확진자</MenuLink>
                    <MenuLink to={`/confirmed_acc?startDate=${startDate}&endDate=${endDate}`}>누적확진자</MenuLink>
                    <MenuLink to={`/active?startDate=${startDate}&endDate=${endDate}`}>격리환자</MenuLink>
                    <MenuLink to={`/released?startDate=${startDate}&endDate=${endDate}`}>격리해제</MenuLink>
                    <MenuLink to={`/released_acc?startDate=${startDate}&endDate=${endDate}`}>누적격리해제</MenuLink>
                    <MenuLink to={`/death?startDate=${startDate}&endDate=${endDate}`}>사망자</MenuLink>
                    <MenuLink to={`/death_acc?startDate=${startDate}&endDate=${endDate}`}>누적사망자</MenuLink>
                </nav>
            )}
            
            {error ? (
                <ErrorView error={error} />
            ) : data && <LineChartView chartData={chartData} />}
        </div>
    );
};

export default Covid19;
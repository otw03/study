import React, { memo } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { getCovid19Data } from './slices/Covid19Slice';

const Test = memo(() => {
    const dispatch = useDispatch();
    const { data, loading, error } = useSelector((state) => state.Covid19Slice);

    React.useEffect(() => {
        dispatch(getCovid19Data({
            sido: '서울',
            startDate: '2022-05-01',
            endDate: '2022-05-31'
        }))
    }, [dispatch]);

    return (
        loading ? "loading..." : (
            error ? JSON.stringify(error) : (
                <>
                    <h1>Documents</h1>
                    {JSON.stringify(data)}
                </>
            )
        )
    )
});

export default Test;
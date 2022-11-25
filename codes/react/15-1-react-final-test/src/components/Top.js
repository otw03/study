import React, { memo, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useQueryString } from '../hooks/useQueryString';
import styled from 'styled-components';

const Form = styled.form`
    background-color: #fff;
    display: flex;
    align-content: center;
    border-top: 1px solid #eee;
    border-bottom: 1px solid #eee;
    padding: 10px 0;
    margin: 0;
    margin-bottom: 20px;

    input, button {
        display: block;
        margin-right: 5px;
        font-size: 16px;
        padding: 5px 10px;
    }

    input {
        flex: none;
    }

    button {
        width: 70px;
        flex: none;
    }
`;

const Top = memo(() => {

    const navigate = useNavigate();
    const { startDate, endDate } = useQueryString();

    const onSearchSubmit = useCallback((e) => {
        e.preventDefault();
        navigate(`/confirmed?startDate=${e.target.startDate.value}&endDate=${e.target.endDate.value}`);
    }, [navigate]);

    return (
        <div>
            <h1>Covid19 현황</h1>

            <Form onSubmit={onSearchSubmit}>
                <input type="date" name="startDate" defaultValue={startDate}/>
                ~
                <input type="date" name="endDate" defaultValue={endDate}/>
                <button type='submit'>검색</button>
            </Form>
        </div>
    );
});

export default Top;

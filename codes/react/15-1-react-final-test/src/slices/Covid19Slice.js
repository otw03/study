import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { pending, fulfilled, rejected } from '../helper/ReduxHelper';
import axios from 'axios';

export const getCovid19Data = createAsyncThunk('Covid19Slice/getCovid19Data', async (payload, { rejectWithValue }) => {
    const params = {};

    if (payload.startDate) {
        params.date_gte = payload.startDate;
    }

    if (payload.endDate) {
        params.date_lte = payload.endDate;
    }

    let result = null;

    try {
        const response = await axios.get('/covid19', {params: params});
        result = response.data;
    } catch (err) {
        result = rejectWithValue(err.response);
    }

    return result;
});

const Covid19Slice = createSlice({
    name: 'Covid19Slice',
    initialState: {
        data: null,
        loading: false,
        error: null
    },
    extraReducers: {
        [getCovid19Data.pending]: pending,
        [getCovid19Data.fulfilled]: fulfilled,
        [getCovid19Data.rejected]: rejected,
    },
});

export default Covid19Slice.reducer;
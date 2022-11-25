import React, { memo } from 'react';

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

import { Line } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

const LineChartView = memo(({ chartData }) => {
    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: false
            },
        }
    };

    const data = {
        labels: chartData.date,
        datasets: [{
            label: '명',
            borderColor: '#0066ff',
            data: chartData.value,
        }]
    };

    return <Line data={data} options={options} />;
});

LineChartView.defaultProps = {
    chartData: {
        date: [], value: []
    }
}

export default LineChartView;
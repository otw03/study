import React, { memo } from "react";

import {
    //공통 항목들
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

import { Bar } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
);

const BarChartView = memo(({ labels, dataset, legend }) => {
    /** 그래프 옵션 */
    const options = {
        indexAxis: 'x',
        responsive: true,
    };

    /** chart에 표시될 데이터 (막대그래프용) */
    const data = {
        labels: labels,
        datasets: [{
            label: 'legend',
            data: [72, 95, 94, 77, 82],
            backgroundColor: '#0066ff44',
            borderColor: '#0066ff',
            borderWidth: 1,
            data: dataset,
        }]
    };

    return ((labels && dataset) && <Bar data={data} options={options} />);
});

BarChartView.defaultProps = {
    labels: [],
    dataset: [],
    legend: ''
}

export default BarChartView;

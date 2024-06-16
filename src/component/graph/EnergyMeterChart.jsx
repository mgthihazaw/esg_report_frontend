import React from 'react';
import BarChart from '../charts/BarChart';

const EnergyMeterChart = () => {
    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Chart.js Bar Chart',
            },
        },
    };

    const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

    const data = {
        labels,
        datasets: [
            {
                label: 'Dataset 1',
                data: ['10000', '12000', '10000', '12000', '10000', '12000', '50000'],
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
            {
                label: 'Dataset 2',
                data: ['10000', '12000', '10000', '12000', '10000', '12000', '50000'],
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
            },
        ],
    };

    return (
        <>
            <div className="card carbon-footprint">
                <h2>Carbon Footprint</h2>
                <div className="content">
                    <BarChart data={data} options={options} />
                </div>
            </div>
        </>);
};

export default EnergyMeterChart;

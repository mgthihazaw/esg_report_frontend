import React from 'react';
import BarChart from '../charts/BarChart';

const WaterLevelChart = () => {
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
        scales: {
            y: {
                beginAtZero: true
            }
        }
    };

    const labels= ['10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00', '00:00', '01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00', '08:00', '09:00'];

    const data = {
        labels,
        datasets: [
            {
                label: 'Dataset 1',
                data: ['10000', '12000', '10000', '12000', '10000', '12000', '50000'],
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
            },
        ],
    };


    return (
        <>
            <div className="card carbon-footprint">
                <h2>Water Level(Water Detection Tent)</h2>
                <div className="content">
                    <BarChart data={data} options={options} />
                </div>
            </div>
        </>);
};

export default WaterLevelChart;

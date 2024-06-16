import React from 'react';
import BarChart from '../charts/BarChart';

const WaterLevelChart = ({ waterLevels}) => {
    waterLevels = ['1.0000', '0.1200', '0.1000', '0.8000', '0.9000', '0.6000', '0.5000'];

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
                label: 'Average Water Level(ml)',
                data: waterLevels,
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

import React from 'react';
import BarChart from '../charts/BarChart';

const WaterLevelChart = ({ waterLevels}) => {
    

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

    const labels= waterLevels.map(item => item.time);

    const data = {
        labels,
        datasets: [
            {
                label: 'Average Water Level(ml)',
                data: waterLevels.map(item => item.waterlevels),
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

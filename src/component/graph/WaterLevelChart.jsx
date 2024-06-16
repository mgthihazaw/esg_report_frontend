import React from 'react';
import BarChart from '../charts/BarChart';

const WaterLevelChart = () => {

    return (
        <>
            <div className="card carbon-footprint">
                <h2>Carbon Footprint</h2>
                <div className="content">
                    <BarChart chartData={null}/>
                </div>
            </div>
        </>);
};

export default WaterLevelChart;

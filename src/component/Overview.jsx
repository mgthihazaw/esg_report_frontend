import React from 'react';
import Anomalities from './graph/Anomalities';
import ChartComponent from './graph/ChartComponent';

const Overview = ({ onOverviewHandler }) => {

    return (
        <div className="card overview">
            <div className="esg-readings">
                <button className="esg-button" onClick={onOverviewHandler}>ESG Readings</button>
            </div>
            <div className="energy-chart">
                <ChartComponent />
            </div>
        </div>
    )
}

export default Overview
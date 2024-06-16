import React from 'react';
import { LuPlug } from "react-icons/lu";

const EnergyMeterChart = ({ electricityUnit }) => {

    return (
        <>
            <div className="card carbon-footprint">
                <h2>Carbon Footprint</h2>
                <div className="content">
                    <div className="electric">
                        <div className="electric-icon"><LuPlug className='icon'/> </div>
                        <h1>{electricityUnit} kWh</h1>
                    </div>
                </div>
            </div>
        </>);
};

export default EnergyMeterChart;

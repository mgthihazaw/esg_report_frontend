import React from 'react'

const WaterUsage = ({waterPercentage}) => {
    waterPercentage = 50;
  return (
    <>
    <div className="card carbon-footprint">
        <h2>Water Usage</h2>
        <div className="content">
            <div className="percentage">
                <h1>{waterPercentage}%</h1>
            </div>
        </div>
    </div>
</>);
  
}

export default WaterUsage
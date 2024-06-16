import React from 'react'

const WaterUsage = ({waterPercentage}) => {
    const total = waterPercentage.reduce((sum, item) => sum + item.waterusages, 0);

    // Calculate the average
    const percentage = Math.floor((waterPercentage.length/total) * 100 )
  return (
    <>
    <div className="card carbon-footprint">
        <h2>Water Usage</h2>
        <div className="content">
            <div className="percentage">
                <h1>{percentage}%</h1>
            </div>
        </div>
    </div>
</>);
  
}

export default WaterUsage
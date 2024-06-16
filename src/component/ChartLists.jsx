import React from 'react'
import EnergyMeterChart from './graph/EnergyMeterChart';
import WaterLevelChart from './graph/WaterLevelChart';

const ChartLists = ({ dataChartLists }) => {
    return (
        <>
            {dataChartLists.length >= 0 ?
                (<>
                    <EnergyMeterChart />
                    <WaterLevelChart />
                </>)
                :
                <></>
            }
        </>
    )
}

export default ChartLists
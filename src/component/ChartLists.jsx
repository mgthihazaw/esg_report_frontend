import React from 'react'
import Anomalities from './graph/Anomalities';
import EnergyMeterChart from './graph/EnergyMeterChart';
import WaterLevelChart from './graph/WaterLevelChart';
import WaterUsage from './graph/WaterUsage';

const ChartLists = ({ dataChartLists }) => {
    return (
        <>
            {dataChartLists.length >= 0 ?
                (<>
                    <EnergyMeterChart />
                    <WaterLevelChart />
                    <Anomalities />
                    <WaterUsage />
                </>)
                :
                <></>
            }
        </>
    )
}

export default ChartLists
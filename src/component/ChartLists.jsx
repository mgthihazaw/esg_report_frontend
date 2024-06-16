import React from 'react'
import Anomalities from './graph/Anomalities';
import EnergyMeterChart from './graph/EnergyMeterChart';
import WaterLevelChart from './graph/WaterLevelChart';
import WaterUsage from './graph/WaterUsage';

const ChartLists = ({ dataChartLists, anomalies }) => {

    return (
        <>
            <EnergyMeterChart electricityUnit={dataChartLists} />
            <WaterLevelChart waterLevels={dataChartLists} />
            <WaterUsage waterPercentage={dataChartLists} />
            <Anomalities dataAnomalities={anomalies}/>
        </>
    )
}

export default ChartLists
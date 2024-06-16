import React from 'react'
import Anomalities from './graph/Anomalities';
import EnergyMeterChart from './graph/EnergyMeterChart';
import WaterLevelChart from './graph/WaterLevelChart';
import WaterUsage from './graph/WaterUsage';

const ChartLists = ({ dataChartLists }) => {

    return (
        <>
            <EnergyMeterChart electricityUnit={dataChartLists.electricity}/>
            <WaterLevelChart waterLevels={dataChartLists.waterlevels}/>
            <Anomalities dataAnomalities={dataChartLists.anomalies}/>
            <WaterUsage waterPercentage={dataChartLists.waterusages}/>
        </>
    )
}

export default ChartLists
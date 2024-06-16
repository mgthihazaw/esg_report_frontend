import React, { useState } from 'react';
import ChartLists from './component/ChartLists';
import Overview from './component/Overview';

function Home() {
  const [charts,setCharts] = useState([]);


  const onOverview = (event) => {
    console.log("onClickOverview")
  };
  return (
    <main className='main-container'>
      <div className='main-title'>
        <div>
          <span className="title">Report</span>
          <span className="breadcrumb">Home / Report</span>
        </div>
      </div>

      <div className="dashboard">
        <Overview onOverviewHandler={onOverview}/>
        <ChartLists dataChartLists={charts}/>
      </div>
    </main>
  )
}

export default Home
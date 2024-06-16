import React, { useState } from 'react';
import ChartLists from './component/ChartLists';
import Overview from './component/Overview';

function Home() {
  const [charts, setCharts] = useState([]);
  const [showChartList,setShowChartList] = useState(false)

  const fetchChartDetailData = async () => {
    try {
      const res = await fetch('/api/chart-detail');
      const data = await res.json();
      setCharts(data);
    } catch (e) {
      console.log(e)
    }
  }

  const onOverview = (e) => {
    e.preventDefault();
    //fetchChartDetailData()
    setCharts(["ddd"])
    setShowChartList(true);
 }

  return (
    <main className='main-container'>
      <div className='main-title'>
        <div>
          <span className="title">Report</span>
          <span className="breadcrumb">Home / Report</span>
        </div>
      </div>

      <div className="dashboard">
        <Overview onOverviewHandler={onOverview} />
        { showChartList ? <ChartLists dataChartLists={charts} /> : <></> }
      </div>
    </main>
  )
}

export default Home
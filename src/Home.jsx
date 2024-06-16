import React, { useState } from 'react';
import ChartLists from './component/ChartLists';
import Overview from './component/Overview';


const Home = React.forwardRef((props, ref) => {
  const [charts, setCharts] = useState([]);
  const [showChartList,setShowChartList] = useState(false)

  const fetchChartDetailData = async () => {
    try {
      const res = await fetch('http://localhost:8000/data-report');
      const data = await res.json();
      setCharts(data);
    } catch (e) {
      console.log(e)
    }
  }

  const onOverview = (e) => {
    e.preventDefault();
    fetchChartDetailData()
    setShowChartList(true);
 }

  return (
    <main className='main-container' >
      <div className='main-title'>
        <div>
          <span className="title">Report</span>
          <span className="breadcrumb">Home / Report</span>
        </div>
        <div>{ showChartList ? <button className='printBtn' onClick={props.handlePrint}>Print</button> : <></> }</div>
      </div>

      <div className="dashboard" ref={ref}>
        <Overview onOverviewHandler={onOverview} />
        { showChartList ? <ChartLists dataChartLists={charts} /> : <></> }
      </div>
    </main>
  )
});

export default Home
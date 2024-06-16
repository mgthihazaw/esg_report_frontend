import React, { useState } from 'react';
import { useEffect } from 'react';
import ChartLists from './component/ChartLists';
import Overview from './component/Overview';

const BACKEND_URL = "http://localhost:8000/api"

const Home = React.forwardRef((props, ref) => {
  const [charts, setCharts] = useState([]);
  const [showChartList,setShowChartList] = useState(false)
  const [consumptions,setComsumptions] = useState([])
  const [anomalies,setAnomalies] = useState([])

  const fetchOverview = async () => {
    try {
      const res = await fetch(`${BACKEND_URL}/overview`);
      const data = await res.json();
      setComsumptions(data);
    } catch (e) {
      console.log(e)
    }
  }

  const fetchChartDetailData = async () => {
    try {
      const res = await fetch(`${BACKEND_URL}/data-report`);
      const data = await res.json();
      setCharts(data);
    } catch (e) {
      console.log(e)
    }
  }
  
  const fetchAnomalies = async () => {
    try {
      const res = await fetch(`${BACKEND_URL}/anomalies`);
      const data = await res.json();
      setAnomalies(data);
    } catch (e) {
      console.log(e)
    }
  }


  useEffect(() => {
    fetchOverview()
  }, []);

  const onOverview = (e) => {
    e.preventDefault();
    fetchChartDetailData();
    fetchAnomalies()
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
        <Overview onOverviewHandler={onOverview} consumptions={consumptions}/>
        { showChartList ? <ChartLists dataChartLists={charts} anomalies={anomalies}/> : <></> }
      </div>
    </main>
  )
});

export default Home
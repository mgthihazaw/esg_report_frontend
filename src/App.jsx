import { useState } from 'react'
import './App.css'
import Header from './component/Header'
import Sidebar from './component/Sidebar'
import HomePage from './HomePage';

function App() {
  

  return (
    <div className='grid-container'>
      <Header/>
      <Sidebar/>
      <HomePage/>
    </div>
  )
}

export default App

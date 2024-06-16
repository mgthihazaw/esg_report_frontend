import { useState } from 'react'
import './App.css'
import Header from './component/Header'
import Sidebar from './component/Sidebar'
import Home from './Home'

function App() {
  

  return (
    <div className='grid-container'>
      <Header/>
      <Sidebar/>
      <Home />
    </div>
  )
}

export default App

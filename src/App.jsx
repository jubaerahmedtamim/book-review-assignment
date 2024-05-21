import { useState } from 'react'

import './App.css'
import NavBar from './Components/NavBar/NavBar'
import { Outlet } from 'react-router-dom'

function App() {

  return (
    <>
      <div className='max-w-7xl mx-auto'>
        <NavBar></NavBar>
        <Outlet></Outlet>
      </div>
    </>
  )
}

export default App

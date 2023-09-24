import React from 'react'
import Navber from '../components/header/navber/Navber'
import { Outlet } from 'react-router-dom'

const MainLeyout = () => {
  return (
    <div>
        <Navber />
        <Outlet />
    </div>
  )
}

export default MainLeyout
import React from 'react'
import Navbar from '../shared/Navbar/Navbar'
import { Outlet } from 'react-router-dom'

export default function Main() {
  return (
    <div>
    <Navbar />
    <Outlet />
    </div>
  )
}

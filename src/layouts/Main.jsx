import React from 'react'
import Navbar from '../shared/Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../shared/Login/Footer/Footer'

export default function Main() {
  return (
    <div>
    <Navbar />
    <Outlet />
    <Footer />
    </div>
  )
}

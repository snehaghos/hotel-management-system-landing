import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../GuestLayout/components/Navbar'
import Footer from '../GuestLayout/components/Footer'





export const GuestLayout = () => {
  return (
    <>
          <Navbar/>
            <Outlet/>
          
            <Footer/>
    </>
  )
}

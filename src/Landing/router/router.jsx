import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { GuestLayout } from '../layouts/GuestLayout'
import LandingPage from '../GuestLayout/LandingPage'
import AboutUs from '../GuestLayout/pages/AboutUs'
import Login from '../GuestLayout/pages/Login'
import HotelBooking from '../GuestLayout/pages/HotelBooking'
import ContactUs from '../GuestLayout/pages/ContactUs'




const Router = () => {
    return (
     
            <Routes>
                <Route path="/" element={<GuestLayout />}>
                    <Route index element={<LandingPage />} />
                    <Route path="/about" element={<AboutUs />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/contact" element={<ContactUs />} />
                    <Route path="/book" element={<HotelBooking />} />
                    {/* <Route path="/dashboard" element={<AuthLayout><Dashboard /></AuthLayout>} />       */}
                </Route>
            </Routes>
    
    )
}

export default Router
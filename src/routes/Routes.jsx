import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../components/Home'
import { ROUTE } from '../utils/routes'
import Contacts from '../components/Contacts'
import FAQ from '../components/FAQ'
import Area from '../components/Area'
import Booking from '../components/Booking'
import Payment from '../components/Payment'

const AppRoutes = () => {
  return (
    <Routes>
        <Route index element={<Home/>} />
                <Route path={ROUTE.ABOUT} element={<Contacts />} />
                <Route path={ROUTE.FAQ} element={<FAQ />} />
                <Route path={ROUTE.AREA} element={<Area />} />
                <Route path={ROUTE.BOOKING} element={<Booking />} />
                <Route path={ROUTE.PAYMENT} element={<Payment />} />
    </Routes>
  )
}

export default AppRoutes
import React, { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Home from './pages/home/home'
import Prices from './pages/pricing/prices'
import Partner from './pages/partners/partner'
import Feature from './pages/features/feature'
import Login from './pages/Login/Login'
import DemoBooking from './pages/demobooking/demoBooking'
import Refund from './pages/refund/Refund'
import Privacy from './pages/privacy/Privacy'
import TermsAndConditions from './pages/termCondition/TermCondition'

const App = () => {
  const location = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/pricing' element={<Prices />} />
        {/* <Route path='/partners' element={<Partner />} /> */}
        <Route path='/features' element={<Feature />} />
        <Route path='/login' element={<Login />} />
        <Route path='/demo-book' element={<DemoBooking />} />
        <Route path='/refund-policy' element={<Refund/>} />
        <Route path='/privacy-policy' element={<Privacy/>} />
        <Route path='/terms-&-condition' element={<TermsAndConditions/>} />

      </Routes>
    </div>
  )
}

export default App

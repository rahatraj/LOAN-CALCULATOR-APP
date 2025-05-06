import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home.jsx'
import ExchangeRate from '../pages/ExchangeRate.jsx'
import About from '../pages/About.jsx'
import NotFound from '../pages/NotFound.jsx'

function Approutes() {
  return (
    <>
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/exchangerate" element={<ExchangeRate />}/>
            <Route path="/about" element={<About />}/>
            <Route path="/error" element={<NotFound />}/>

            {/* for unmatched routes */}
            <Route path='*' element={<NotFound />} />
        </Routes>
    </>
  )
}

export default Approutes
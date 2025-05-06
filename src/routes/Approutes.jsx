import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import ExchangeRate from '../pages/ExchangeRate'
import About from '../pages/About'
import NotFound from '../pages/NotFound'

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
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import LandingPage1 from './pages/landingpage/landingPage1'
import LandingPage2 from './pages/landingpage/landingPage2'
import LandingPage3 from './pages/landingpage/landingPage3'
import Login from './pages/login/login'
import Register from './pages/register/register'

export default function RouterPage() {
  return (
    <>
          <Routes>
          <Route path="/" element={<LandingPage1 />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/register" element={<Register />} />
          <Route path="/welcome" element={<LandingPage2 />} />
          <Route path="/disclaimer" element={<LandingPage3 />} />
          </Routes>
    </>
  )
}

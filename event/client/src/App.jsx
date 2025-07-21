"use client"

import { Routes, Route, Navigate } from "react-router-dom"
import { useState, useEffect } from "react"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Venues from "./pages/Venues"
import VenueDetail from "./pages/VenueDetail"
import Booking from "./pages/Booking"
import Navbar from "./components/Navbar"

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const token = localStorage.getItem("token")
    setIsLoggedIn(!!token)
    setLoading(false)
  }, [])

  const handleLogout = () => {
    localStorage.removeItem("token")
    setIsLoggedIn(false)
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 flex flex-col items-center justify-center">
        <div className="relative mb-8">
          <div className="w-20 h-20 bg-gradient-to-br from-amber-500 to-amber-600 rounded-3xl flex items-center justify-center animate-pulseGlow">
            <span className="text-4xl text-slate-900 font-bold">E</span>
          </div>
        </div>
        <div className="loading-luxury w-12 h-12 mb-6"></div>
        <p className="text-slate-300 text-xl font-medium animate-pulse">Loading Eventopia...</p>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800">
      {isLoggedIn && <Navbar onLogout={handleLogout} />}

      <div className="w-full">
        <Routes>
          {!isLoggedIn ? (
            <>
              <Route path="/login" element={<Login onLogin={() => setIsLoggedIn(true)} />} />
              <Route path="/register" element={<Register onRegister={() => setIsLoggedIn(true)} />} />
              <Route path="*" element={<Navigate to="/login" replace />} />
            </>
          ) : (
            <>
              <Route path="/" element={<Home />} />
              <Route path="/venues" element={<Venues />} />
              <Route path="/venue/:id" element={<VenueDetail />} />
              <Route path="/booking/:id" element={<Booking />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </>
          )}
        </Routes>
      </div>
    </div>
  )
}

export default App

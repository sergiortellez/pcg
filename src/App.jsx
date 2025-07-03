import { useState, useEffect } from 'react'
import './App.css'

//Router
import { BrowserRouter, Route, Routes } from 'react-router-dom'

//components
import Layout from './components/Layout/Layout'



//Pages
import Login from './pages/login/Login'
import Home from './pages/home/Home'
import Info from './pages/info/Info'
import Partners from './pages/partners/Partners'
import Practice from './pages/practice/Practice'
import Key from './pages/key/Key'
import Profile from './pages/profile/Profile'



function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Ruta pública sin layout */}
        <Route path="/" element={<Login />} />

        {/* Rutas con layout */}
        <Route element={<Layout />}>
          <Route path="/ethos" element={<Home />} />
          <Route path="/practice" element={<Practice />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/info" element={<Info />} />
          <Route path="/key" element={<Key />} />
          <Route path="/profile" element={<Profile />} />
        </Route>

        {/* 404 */}
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

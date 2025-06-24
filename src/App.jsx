import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

//Router
import { BrowserRouter, Route, Routes } from 'react-router-dom'

//Pages
import Home from './pages/home/Home'
import Info from './pages/info/Info'
import Partners from './pages/partners/Partners'
import Practice from './pages/practice/Practice'
import Profile from './pages/profile/Profile'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          {/*Pages  */}
          <Route path="/" element={<Home />} />
          <Route path="/info" element={<Info />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/practice" element={<Practice />} />
          <Route path="/profile" element={<Profile />} />
          {/* aux */}
          <Route path="*" element={<h1>404 Not Found</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

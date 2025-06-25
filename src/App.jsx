import { useState, useEffect } from 'react'
import './App.css'

//Router
import { BrowserRouter, Route, Routes } from 'react-router-dom'

//components
import NavMenu from './components/NavMenu/NavMenu'
import NavBar from './components/NavBar/NavBar'
import TopBar from './components/TopBar/TopBar'


//Pages
import Home from './pages/home/Home'
import Info from './pages/info/Info'
import Partners from './pages/partners/Partners'
import Practice from './pages/practice/Practice'
import Profile from './pages/profile/Profile'



function App() {
  //is the app running on a mobile browser?
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 767.98 && /Mobi|Android/i.test(navigator.userAgent))

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 767.98 && /Mobi|Android/i.test(navigator.userAgent));
  };

  //is necessary to check the size of the window on resize
  useEffect(() => {
    window.addEventListener('resize', handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <BrowserRouter>
        {!isMobile && <NavBar />}
        {isMobile && <TopBar />}
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
        {isMobile && <NavMenu />}
      </BrowserRouter>

    </>
  )
}

export default App

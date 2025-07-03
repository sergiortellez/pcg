/*<---------------------------------------------------------------------------->
<!--	Layout (Page)	-->
<!----------------------------------------------------------------------------->
* Description:
     
* Parameters:
    -
* Dependencies:
    -
* Returns/results:
    
<!------------------------------------------------->*/

//---------------------imports----------------------

//styles
import styles from './Layout.module.css'
//Router
import { Outlet } from 'react-router-dom'
import { useState, useEffect } from 'react'
//components
import NavMenu from '../NavMenu/NavMenu'
import NavBar from '../NavBar/NavBar'
import TopBar from '../TopBar/TopBar'

export default function Layout() {
  //is the app running on a mobile browser?
  const [isMobile, setIsMobile] = useState(
    window.innerWidth <= 767.98 && /Mobi|Android/i.test(navigator.userAgent)
  )
  useEffect(() => {
    const onResize = () =>
      setIsMobile(window.innerWidth <= 767.98 && /Mobi|Android/i.test(navigator.userAgent))
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  return (
    <>
      {!isMobile ? <NavBar /> : <TopBar />}
      <Outlet />
      {isMobile && <NavMenu />}
    </>
  )
}

/*<!--------------------------------------------------------------------------->
<!--	end Layout(Page)	-->
<!--------------------------------------------------------------------------->*/


/*<---------------------------------------------------------------------------->
<!--	navMenu (Component)	-->
<!----------------------------------------------------------------------------->
* Description: This component is the navigation menu for the website. It's a mobile-first design, so it's optimized for mobile devices.  The links are hashlinks that scroll to the corresponding section of the page.  The menu has links that are styled with icons from fontawesome. The menu is responsive and adapts to the screen size. The menu is built using react and react-router-dom.
   
* Parameters:
   - none
* Dependencies:
    - useRef
    - useState
    - react-router-dom
    - HashLink
    - styles
    - FontAwesomeIcon
        - faGrid2
   

* Returns/results: The component returns a navigation menu itself. 
<!------------------------------------------------->*/

//---------------------imports----------------------
//react
import { useState, useRef } from 'react'
import { NavLink } from 'react-router-dom'
//for smooth scrolling
import { HashLink } from "react-router-hash-link";

//fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGrid2, faCalendar, faLocationDot, faHouse } from '@awesome.me/kit-698a354a60/icons/classic/solid'




//styles
import styles from './navMenu.module.css'


export default function navMenu() {
  return (
    <>
      {/* nav bar */}
      <nav data-type="mobile" className={styles.navMenu}>
        <HashLink smooth to="/" className={styles.item} > <FontAwesomeIcon icon={faHouse} className={styles.icon} /> SMART </HashLink>

        <HashLink smooth to="/#experiencias" className={styles.item} > <FontAwesomeIcon icon={faGrid2} className={styles.icon} /> Experiencias </HashLink>

        <NavLink to="/citas" className={styles.item} > <FontAwesomeIcon icon={faCalendar} className={styles.icon} /> Citas </NavLink>

      </nav >
    </>
  );
}

/*<!--------------------------------------------------------------------------->
<!--	end navMenu(Component)	-->
<!--------------------------------------------------------------------------->*/


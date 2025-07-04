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

import { NavLink } from 'react-router-dom'


//fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenNib, faScaleBalanced, faUsers, faCircleInfo, faLockKeyhole } from '@awesome.me/kit-698a354a60/icons/classic/solid'




//styles
import styles from './NavMenu.module.css'


export default function navMenu() {
  return (
    <>
      {/* nav bar */}
      <nav data-type="mobile" className={styles.navMenu}>
        <NavLink to="/ethos" className={styles.item} >
          <FontAwesomeIcon icon={faPenNib} className={styles.icon} /> Ethos
        </NavLink>

        <NavLink to="/practice" className={styles.item} >
          <FontAwesomeIcon icon={faScaleBalanced} className={styles.icon} /> Practice
        </NavLink>

        <NavLink to="/partners" className={styles.item} >
          <FontAwesomeIcon icon={faUsers} className={styles.icon} /> The Group
        </NavLink>

        <NavLink to="/info" className={styles.item} >
          <FontAwesomeIcon icon={faCircleInfo} className={styles.icon} /> Info
        </NavLink>
        <NavLink to="/key" className={styles.item} >
          <FontAwesomeIcon icon={faLockKeyhole} className={styles.icon} /> Exclusive
        </NavLink>


        {/* <NavLink to="/profile" className={styles.item} >
          <FontAwesomeIcon icon={faIdBadge} className={styles.icon} /> Profile
        </NavLink> */}


      </nav >
    </>
  );
}

/*<!--------------------------------------------------------------------------->
<!--	end navMenu(Component)	-->
<!--------------------------------------------------------------------------->*/


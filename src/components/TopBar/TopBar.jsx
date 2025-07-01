/*<---------------------------------------------------------------------------->
<!--	TopBar (Component)	-->
<!----------------------------------------------------------------------------->
* Description:
     This component renders the top bar of the application, which includes the title and a button to switch languages.
* Parameters:
    - overrideTitle: Optional string to override the default title.
    - overrideTranslate: Optional boolean to override the default behavior of showing the translate button.
* Dependencies:
    - useLocation: Hook from react-router-dom to get the current location.
 
* Returns/results:
    - A header element containing the title and a button to switch languages if applicable.
    
<!------------------------------------------------->*/

//---------------------imports----------------------
import { useLocation, useNavigate } from "react-router-dom";
//styles
import styles from './TopBar.module.css'
//FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faIdBadge } from '@awesome.me/kit-698a354a60/icons/classic/solid'

//logo
import logo from '../../assets/images/logos/pcg_logo_short.webp';


export default function TopBar({ overrideTranslate }) {

  const navigate = useNavigate();


  return (
    <>
      <header className={styles.topBar}>

        <div className={styles.brand}>
          <img src={logo} alt="PCG" />
        </div>
        <div className={styles.controls}>
          <button
            // TODO: add a function to change the language
            onClick={() => navigate("/")}
            aria-label="Switch Spanish to English"
            className={styles.translateButton}
          >
            EN
          </button>
          <button
            // TODO: add a function to change the language
            onClick={() => navigate("/profile")}
            aria-label="Open the page Profile"
            className={styles.translateButton}
          >
            <FontAwesomeIcon icon={faIdBadge} />
          </button>
        </div>




      </header>
    </>
  );
}

/*<!--------------------------------------------------------------------------->
<!--	end TopBar(Component)	-->
<!--------------------------------------------------------------------------->*/


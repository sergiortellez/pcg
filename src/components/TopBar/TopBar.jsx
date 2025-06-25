/*<---------------------------------------------------------------------------->
<!--	TopBar (Component)	-->
<!----------------------------------------------------------------------------->
* Description:
     This component renders the top bar of the application, which includes the title and a button to switch languages.
* Parameters:
    - 
* Dependencies:
    -
* Returns/results:
    
<!------------------------------------------------->*/

//---------------------imports----------------------
import { useLocation, useNavigate } from "react-router-dom";
//styles
import styles from './TopBar.module.css'

//Let's use the location to get the current route, keep results in an object.
const routeConfig = {
  "/": { title: "The Powell Continental Group", showTranslate: true },
  "/practice": { title: "Areas of practice", showTranslate: true },
  "/partners": { title: "Our Partners", showTranslate: true },
  "/info": { title: "Info", showTranslate: true },
  "/profile": { title: "My profile", showTranslate: true },
};


export default function TopBar({ overrideTitle, overrideTranslate }) {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const cfg = routeConfig[pathname] || {};
  const title = overrideTitle ?? cfg.title ?? "";
  const showTranslate = overrideTranslate !== false && cfg.showTranslate;
  return (
    <>
      <header className={styles.topBar}>


        <h1 className={styles.title}>
          {title}
        </h1>

        {showTranslate && (
          <button
            // TODO: add a function to change the language
            onClick={() => navigate("/")}
            aria-label="Switch Spanish to English"
            className={styles.translateButton}
          >
            EN
          </button>
        )}


      </header>
    </>
  );
}

/*<!--------------------------------------------------------------------------->
<!--	end TopBar(Component)	-->
<!--------------------------------------------------------------------------->*/


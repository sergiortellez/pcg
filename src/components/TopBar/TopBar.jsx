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
  // Get the configuration for the current route, or an empty object if not found (using bracket notation)
  const configuration = routeConfig[pathname] || {};
  //if overrideTitle is provided, use it, otherwise use the title from the configuration otherwise an empty string
  const title = overrideTitle ?? configuration.title ?? "";
  //if theres no overrideTranslate and the configuration has showTranslate set to true, then showTranslate is true
  const showTranslate = overrideTranslate !== false && configuration.showTranslate;
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


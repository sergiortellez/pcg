/*<---------------------------------------------------------------------------->
<!--	Practice (Component)	-->
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
import styles from './Practice.module.css'

//components
import AccordionButton from '../../components/AccordionButton/AccordionButton.jsx';

//data
import { PracticeData } from './PracticeData.jsx';



export default function Practice() {

  return (
    <>
      <section className={styles.container}>

        {PracticeData.map(({ title, content, lang }) => (
          <AccordionButton
            key={title + lang}
            title={title}
            content={content}
          />
        ))}

      </section>
    </>
  );
}

/*<!--------------------------------------------------------------------------->
<!--	end Practice(Component)	-->
<!--------------------------------------------------------------------------->*/


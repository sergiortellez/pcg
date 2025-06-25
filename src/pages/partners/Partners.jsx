/*<---------------------------------------------------------------------------->
<!--	Partners (Component)	-->
<!----------------------------------------------------------------------------->
* Description:
     
* Parameters:
    -
* Dependencies:
    -
* Returns/results:
    
<!------------------------------------------------->*/

//---------------------imports----------------------
//components
import BioCard from '../../components/BioCard/BioCard';
//data
import { PartnersData } from './PartnersData';
//styles
import styles from './Partners.module.css'


export default function Partners() {
  return (
    <>
      <section className={styles.container}>
        {PartnersData.map(({ photoSrc, name, position, summary, fullBio, lang }) => (
          <BioCard
            key={name + lang}
            photoSrc={photoSrc}
            name={name}
            position={position}
            summary={summary}
            fullBio={fullBio}
          />
        ))}
      </section>
    </>
  );
}

/*<!--------------------------------------------------------------------------->
<!--	end Partners(Component)	-->
<!--------------------------------------------------------------------------->*/


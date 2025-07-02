/*<---------------------------------------------------------------------------->
<!--	Home (Component)	-->
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
import styles from './Home.module.css'

//images
import ethos from '../../assets/images/home/ethos.webp'
import partners from '../../assets/images/home/partners.webp'

export default function Home() {
  return (
    <main className={styles.homeLayout}>


      <h3>The Powell Continental Group</h3>

      <section className={styles.ethos}>
        <div className={styles.fadeCircle}>
          <img src={ethos} alt="JJ Powell" />
        </div>

        <p>
          You have no enemies, you say?<br />
          Alas! my friend, the boast is poor;<br />
          He who has mingled in the fray<br />
          Of duty, that the brave endure,<br />
          Must have made foes! If you have none,<br />
          Small is the work that you have done.<br />
          You’ve hit no traitor on the hip,<br />
          You’ve dashed no cup from perjured lip,<br />
          You’ve never turned the wrong to right,<br />
          You’ve been a coward in the fight.<br />
          <span className={styles.author}>-- Charles Mackay</span>
        </p>

      </section>

      <section className={styles.description}>
        <h3>Welcome</h3>
        <div className={styles.fadeCircleFloated}>
          <img src={partners} alt="PCG partners" />
        </div>

        <p style={{ textAlign: 'left' }}>
          The Powell Continental Group is an exclusive by-invitation only members club providing service to all legal sectors across the globe.
        </p>
        <p style={{ textAlign: 'left' }}>
          Our predominant areas of practice are in Mexico City, London, Paris, New York, Miami and Los Angeles. However, if you have business in any jurisdiction, we will work with our global network of partners to ensure that you, our client, has one sole point of contact for all your legal needs. Thereby, providing a full and comprehensive service with your on-call partner.
        </p>
        <p>
          Each partner is supported by a team of associates, who together, work meticulously to ensure the best resolution within the quickest timeframe. We are conscious of the value of time, therefore, we save yours to enable your businesses to grow and thrive under the unconditional support of our legal helm.
        </p>
        <p>
          We have replaced office space with membership to all the global high-end members clubs. As a Group, we have access to, and are happy to meet with our clients at: The Royal Automobile Club (and all global reciprocals), Soho House (global) Annabel’s, 5 Hertford Street, Maison Estelle, Zero Bond, Casa Cipriani, Core Club, Yacht Club de Monaco and Mexico Drive Resort, The Honorable Society of Middle Temple, The Mexican Bar Association and The American Bar Association. These memberships include unlimited access to exclusive clubs in every major city across all seven continents.
        </p>
        <p>
          The Group also introduces an online profile facility which is stored in our secure and encrypted server. All of your case files, documentations, deeds, contracts, notes and emails will be saved online and accessible through the “Profile” tab of the site with your username and password.
        </p>

        <p>We welcome you to join a revolution in the business sector where law meets luxury.</p>

      </section>
    </main >
  );
}

/*<!--------------------------------------------------------------------------->
<!--	end Home(Component)	-->
<!--------------------------------------------------------------------------->*/


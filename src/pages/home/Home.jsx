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


export default function Home() {
  return (
    <main className={styles.homeLayout}>
      <section className={styles.video}>

      </section>
      <section className={styles.description}>
        <p>
          The Powell Continental Group is the first <span className={styles.accentText}>international boutique law</span> firm of its kind.
          We provide a full and complete client-oriented, resolution service that dedicates it’s time to
          saving yours. Each client must apply to the Group for approval to ensure that we are the
          correct fit for your legal requirements. </p>
        <p>
          Once approved, the client will be assigned a partner and team of its choice, making that
          partner the sole point of contact for the client. This partner shall be available through
          directly 24/7 for 365 days of the year.
          Gone are the days of pre-scheduling calls through interns, days or weeks in advance.
          We do the work behind the scenes, so that you do not have to.
          The Powell Continental Group gives you back the most valuable asset of all, your time.
        </p>

      </section>
    </main>
  );
}

/*<!--------------------------------------------------------------------------->
<!--	end Home(Component)	-->
<!--------------------------------------------------------------------------->*/


/*<---------------------------------------------------------------------------->
<!--	login (Page)	-->
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
import VideoPlayer from '../../components/VideoPlayer/VideoPlayer';

//styles
import styles from './Login.module.css'

//media
import videoFile from '/videos/pcg.mp4';
import logoPCG from '/images/pcg_logo_long.webp';



export default function login() {
  return (
    <section className={styles.loginLayout}>
      <img src={logoPCG} alt="Powell Continental Group Logo" className={styles.logo} />
      <hgroup className={styles.titles}>
        <h1>The Powell Continental Group</h1>
        <h4>An exclusive, invitation-only law firm.</h4>
      </hgroup>
      <figure className={styles.videoContainer}>
        <VideoPlayer videoFile={videoFile} />
      </figure>


      <button className={styles.applyButton}>Apply for Membership</button>
      <button className={styles.membersButton}>Members</button>
    </section>
  );
}

/*<!--------------------------------------------------------------------------->
<!--	end login(Page)	-->
<!--------------------------------------------------------------------------->*/


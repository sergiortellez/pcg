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
//react
import { useState } from 'react';
//components
import VideoPlayer from '../../components/VideoPlayer/VideoPlayer';
import SlideCard from '../../components/SlideCard/SlideCard';
import LoginForm from '../../components/LoginForm/LoginForm';

//styles
import styles from './Login.module.css'

//media
import videoFile from '/videos/pcg.mp4';
import logoPCG from '/images/pcg_logo_long.webp';



export default function login() {

  const [isApplyOpen, setIsApplyOpen] = useState(false);
  const [isMembersOpen, setIsMembersOpen] = useState(false);
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


      <button onClick={() => setIsApplyOpen(true)} className={styles.applyButton}>Apply for Membership</button>
      <button onClick={() => setIsMembersOpen(true)} className={styles.membersButton}>Members</button>

      {/* SlideCards */}

      {/* Apply */}
      <SlideCard
        isOpen={isApplyOpen}
        onClose={() => setIsApplyOpen(false)}
        backgroundColor="hsla(146, 77%, 9%,1.0)"
        color="hsla(0, 0%, 85%, 1.0)">
        {/* add content */}
        Apply
      </SlideCard>

      {/* members */}
      <SlideCard
        isOpen={isMembersOpen}
        onClose={() => setIsMembersOpen(false)}
        backgroundColor="hsla(146, 77%, 9%,1.0)"
        color="hsla(0, 0%, 85%, 1.0)">
        {/* add content */}
        <h2 style={{ marginBottom: '1rem', color: 'white', textAlign: 'center' }}>Welcome Back</h2>
        <LoginForm onClose={() => setIsMembersOpen(false)} />
      </SlideCard>
    </section>
  );
}

/*<!--------------------------------------------------------------------------->
<!--	end login(Page)	-->
<!--------------------------------------------------------------------------->*/


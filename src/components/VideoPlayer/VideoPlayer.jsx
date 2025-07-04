/*<---------------------------------------------------------------------------->
<!--	VideoPlayer (Component)	-->
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
import styles from './VideoPlayer.module.css'


export default function VideoPlayer({ videoFile, videoPoster }) {

  return (
    <div className={styles.videoWrapper}>
      <video
        src={videoFile}
        controls
        autoPlay
        loop
        muted
        width="100%"
        poster={videoPoster}
      >
        Sorry, your browser doesn’t support embedded videos.
      </video>
    </div>

  );
}

/*<!--------------------------------------------------------------------------->
<!--	end VideoPlayer(Component)	-->
<!--------------------------------------------------------------------------->*/


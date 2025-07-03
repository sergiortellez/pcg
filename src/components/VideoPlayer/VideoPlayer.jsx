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
        width="100%"
        poster={videoPoster}
        preload="metadata" // load only metadata initially
      >
        Sorry, your browser doesn’t support embedded videos.
      </video>
    </div>

  );
}

/*<!--------------------------------------------------------------------------->
<!--	end VideoPlayer(Component)	-->
<!--------------------------------------------------------------------------->*/


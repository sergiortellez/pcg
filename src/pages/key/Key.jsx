/*<---------------------------------------------------------------------------->
<!--	key (Component)	-->
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
import styles from './Key.module.css'


export default function Key() {
  return (
    <>
      <section className={styles.keyLayout}>
        <div className={styles.content}>
          <div>
            <h1>The Key</h1>
            <h3><i>- A club within a club -</i></h3>
          </div>

          <button>Apply for Membership</button>
        </div>
      </section>
    </>
  );
}

/*<!--------------------------------------------------------------------------->
<!--	end key(Component)	-->
<!--------------------------------------------------------------------------->*/


/*<---------------------------------------------------------------------------->
<!--	BioCard (Component)	-->
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
import React, { useRef } from 'react';
//styles
import styles from './BioCard.module.css'


export default function BioCard({ photoSrc, name, position, summary, fullBio }) {
  const dialogRef = useRef(null);

  const openDialog = (e) => {
    e.stopPropagation();
    dialogRef.current.showModal();
  };

  const closeDialog = (e) => {
    e.stopPropagation();
    dialogRef.current.close();
  };

  return (
    <>
      <article className={styles.card} onClick={openDialog}>
        <img
          src={photoSrc}
          alt={`${name} photo`}
          className={styles.photo}
        />
        <div className={styles.info}>
          <div>
            <h3 className={styles.name}>{name}</h3>
            <i className={styles.position}>{position}</i>
          </div>
          <p className={styles.summary}>{summary}</p>
          <button
            type="button"
            className={styles.button}
            onClick={openDialog}
          >
            Read more
          </button>
        </div>
      </article>

      <dialog ref={dialogRef} className={styles.dialog} onClick={closeDialog}>
        <div className={styles.dialogContent} onClick={(e) => e.stopPropagation()}>
          <button
            type="button"
            className={styles.close}
            onClick={closeDialog}
          >
            &times;
          </button>
          <h2 className={styles.dialogTitle}>{name}</h2>
          <div className={styles.dialogBio}>
            {Array.isArray(fullBio)
              ? fullBio.map((para, idx) => <p key={idx}>{para}</p>)
              : <p>{fullBio}</p>}
          </div>
        </div>
      </dialog>
    </>
  );
}

/*<!--------------------------------------------------------------------------->
<!--	end BioCard(Component)	-->
<!--------------------------------------------------------------------------->*/


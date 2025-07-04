/*<---------------------------------------------------------------------------->
<!--	SlideCard (Component)	-->
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
import { useEffect, useRef, useState } from 'react';
//styles
import styles from './SlideCard.module.css'


const SlideCard = ({ isOpen, onClose, children, backgroundColor, color }) => {
  const dialogRef = useRef(null);
  const [isClosing, setIsClosing] = useState(false);

  // abre/cierra según prop isOpen
  useEffect(() => {
    const dlg = dialogRef.current;
    if (!dlg) return;

    if (isOpen) {
      dlg.showModal();
    } else if (dlg.hasAttribute('open')) {
      setIsClosing(true);
      const t = setTimeout(() => {
        dlg.close();
        setIsClosing(false);
      }, 400);
      return () => clearTimeout(t);
    }
  }, [isOpen]);

  // clic en backdrop y Esc
  useEffect(() => {
    const dlg = dialogRef.current;
    if (!dlg) return;

    const onClick = e => {
      if (e.target === dlg) onClose();
    };
    const onCancel = e => {
      e.preventDefault();
      onClose();
    };

    dlg.addEventListener('click', onClick);
    dlg.addEventListener('cancel', onCancel);
    return () => {
      dlg.removeEventListener('click', onClick);
      dlg.removeEventListener('cancel', onCancel);
    };
  }, [onClose]);

  return (
    <dialog
      ref={dialogRef}
      className={`${styles.slideCard} ${isClosing ? styles.closing : ''}`}
      style={{
        '--slideCardBgColor': backgroundColor || '#fff',
        '--slideCardTextColor': color || '#000',
      }}
    >
      <header className={styles.header}>
        <button
          className={styles.closeBtn}
          aria-label="Close"
          onClick={onClose}
        >
          ✕
        </button>
      </header>
      <div className={styles.content}>
        {children}
      </div>
    </dialog >
  );
};

export default SlideCard;


/*<!--------------------------------------------------------------------------->
<!--	end SlideCard(Component)	-->
<!--------------------------------------------------------------------------->*/

/*<---------------------------------------------------------------------------->
<!--	AccordionButton (Component)	-->
<!----------------------------------------------------------------------------->
* Description:
     
* Parameters:
    -
* Dependencies:
    -
* Returns/results:
    
<!------------------------------------------------->*/

//---------------------imports----------------------
//React
import React, { useState, useId } from 'react';
//styles
import styles from './AccordionButton.module.css'


export default function AccordionButton({ title, content }) {

  const [isOpen, setIsOpen] = useState(false);
  const id = useId();
  // Generate unique IDs for the button and panel
  const btnId = `accordion-btn-${id}`;
  const panelId = `accordion-panel-${id}`;

  // Toggle the accordion state
  const toggle = () => {
    if (document.startViewTransition) {
      document.startViewTransition(() => setIsOpen(o => !o));
    } else {
      setIsOpen(o => !o);
    }
  };

  // Render the accordion button and content
  const renderContent = () => {
    if (Array.isArray(content)) {
      return content.map((para, i) => (
        <p key={i} className={styles.paragraph}>{para}</p>
      ));
    }
    return <p className={styles.paragraph}>{content}</p>;
  };


  return (
    <>
      <div className={styles.container}>
        <button
          id={btnId}
          className={styles.header}
          onClick={toggle}
          aria-expanded={isOpen}
          aria-controls={panelId}
          type="button"
        >
          <span className={styles.title}>{title}</span>
          <span
            className={`${styles.icon} ${isOpen ? styles.iconOpen : ''}`}
            aria-hidden="true"
          >
            ▼
          </span>
        </button>

        <div
          id={panelId}
          className={`${styles.content} ${isOpen ? styles.contentOpen : ''}`}
        >
          <div className={styles.contentInner}>
            {renderContent()}
          </div>
        </div>
      </div>
    </>
  );
}

/*<!--------------------------------------------------------------------------->
<!--	end AccordionButton(Component)	-->
<!--------------------------------------------------------------------------->*/


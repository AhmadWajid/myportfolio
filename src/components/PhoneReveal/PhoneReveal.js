import React, { useState } from 'react';
import styles from './PhoneReveal.module.css';

const PhoneReveal = ({ phoneNumber, displayText, className = "" }) => {
  const [isRevealed, setIsRevealed] = useState(false);

  const handleClick = () => {
    setIsRevealed(!isRevealed);
  };

  return (
    <span className={`${styles.phoneReveal} ${className}`}>
      {isRevealed ? (
        <a href={`tel:${phoneNumber.replace(/[^0-9]/g, '')}`} className={styles.phoneLink}>
          {displayText || phoneNumber}
        </a>
      ) : (
        <button 
          onClick={handleClick} 
          className={styles.revealButton}
          aria-label="Click to reveal phone number"
        >
        </button>
      )}
    </span>
  );
};

export default PhoneReveal;

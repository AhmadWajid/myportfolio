import React from 'react';
import styles from "./Logo.module.css"
const Logo = ({name}) => {
  return (
    <div className={`${styles['logo']}`}>
      <img className={`${styles['logo-image']}`} src="/imgs/me.jpeg" alt="Logo" />
      <p className={`${styles['logo-name']}`}>{name.split(' ')[0]}<span className='colored'>{name.split(' ')[1]}</span></p>
    </div>
  );
};

export default Logo;
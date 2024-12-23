// Links.js
import React from 'react';
import styles from './Links.module.css';

const Links = ({ links, isMobile, isMenuOpen}) => {
  return (
    <div
      className={`${styles['links-container']} ${
        isMobile ? styles['mobile-links'] : ''
      }`}
    >
      {links.map((link, index) => (
        <a key={index} href={link.href} className={styles['link-element']}>
          {link.name}
        </a>
      ))}
    </div>
  );
};

export default Links;

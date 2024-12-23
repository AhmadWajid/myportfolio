import React from 'react';
import style from './Button.module.css';

const Button = ({ text, href, type }) => {
  const handleClick = (e) => {
    if (href.startsWith('#')) {
      // Prevent default anchor behavior
      e.preventDefault();

      // Scroll to the section with the given id
      const section = document.querySelector(href);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // Open external link in a new tab
      window.open(href, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div className={style['button-outer']}>
      <div
        className={`${style.button} ${style[type]}`}
        onClick={handleClick}
      >
        {text}
      </div>
    </div>
  );
};

export default Button;

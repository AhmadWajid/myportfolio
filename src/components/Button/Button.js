import React from 'react';
import style from './Button.module.css';

const Button = ({ text, href, type }) => {
  const handleClick = (e) => {
    if (href.startsWith('#')) {
      // Prevent default anchor behavior for internal links
      e.preventDefault();

      // Scroll to the section with the given id
      const section = document.querySelector(href);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // Open external link in a new tab for external links
      window.open(href, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div className={style['button-outer']}>
      {/* Use anchor tag for href */}
      <a
        className={`${style.button} ${style[type]}`}
        href={href} // for accessibility and basic link behavior
        onClick={handleClick} // your custom click handler
        role="button"
      >
        {text}
      </a>
    </div>
  );
};

export default Button;

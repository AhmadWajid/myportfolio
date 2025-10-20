import React, { useState, useEffect } from 'react';
import styles from './NavbarContainer.module.css';
import Logo from './Logo';
import Links from './Links';
import Button from '../Button/Button'

function NavbarContainer() {
  const [isLargeScreen, setIsLargeScreen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 1024px)");

    const handleResize = () => {
      setIsLargeScreen(mediaQuery.matches);

      // Close the menu if the screen is resized to large
      if (mediaQuery.matches) setIsMenuOpen(false);
    };

    handleResize();
    mediaQuery.addEventListener("change", handleResize);

    return () => mediaQuery.removeEventListener("change", handleResize);
  }, []);

  const links = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
  ];

  return (
    <header>
    <div className={`${styles['navbar-container']}`}>
      <Logo name="Ahmad Wajid" />
      
      {/* Render desktop links */}
      {isLargeScreen && <Links links={links} isMobile={false} isMenuOpen={false}/>}
      
      {/* Hamburger Menu for Mobile */}
      {!isLargeScreen && (
        <div
            className={styles['navbar-hamburger']}
            onClick={() => setIsMenuOpen((prev) => !prev)}
          >
          <i className="fa fa-bars" aria-hidden="true"></i>
        </div>
      )}
  {isLargeScreen ?                 <div className={styles['nav-button-holder']}><Button text="Contact" href="#contact" type={"button-darkblue"}/><Button text="Resume" href="/files/Resume.pdf" type={"button-blue"}/></div>
: ''}
    </div>
          {/* Mobile Menu */}
          {!isLargeScreen && isMenuOpen && (
          <Links links={links} isMobile={true}  isMenuOpen={isMenuOpen}/>
      )}
      
    </header>
  );
}

export default NavbarContainer;

import React from 'react';
import styles from './HeroSection.module.css';
import Button from '../Button/Button'; // Your pre-made Button component
import { Typewriter } from 'react-simple-typewriter';

const HeroSection = ({name, subtitle, }) => {
  return (
    <div id="home" className={styles.hero}>
      <div className={styles.content}>
        <h1 className={styles.title}>{name}</h1>
        <p className={styles.subtitle}>
          <Typewriter
            words={subtitle}
            loop={true} 
            cursor
            cursorStyle="|" 
            typeSpeed={100} 
            deleteSpeed={50} 
            delaySpeed={1000} 
          />
        </p>
        <div className={styles.buttonGroup}>
          <Button href="#about" text="About Me 👇" type="button-white" />
          <Button href="/files/Resume.pdf" text="Resume" type="button-white"/>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

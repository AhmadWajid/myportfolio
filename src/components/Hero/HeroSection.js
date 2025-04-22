import React, { useEffect, useState } from 'react';
import styles from './HeroSection.module.css';
import Button from '../Button/Button';
import { Typewriter } from 'react-simple-typewriter';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

const HeroSection = ({name, subtitle}) => {
  const [isMounted, setIsMounted] = useState(false);
  
  useEffect(() => {
    setIsMounted(true);
    return () => setIsMounted(false);
  }, []);

  return (
    <div id="home" className={styles.hero}>
      {/* Animated background */}
      <div className={styles.particlesContainer}>
        {[...Array(20)].map((_, index) => (
          <div 
            key={index}
            className={styles.particle}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              width: `${Math.random() * 20 + 5}px`,
              height: `${Math.random() * 20 + 5}px`,
            }}
          />
        ))}
      </div>
      
      <div className={`${styles.content} ${isMounted ? styles.animate : ''}`}>
        <h1 className={styles.title}>
          <span className={styles.gradientText}>{name}</span>
        </h1>
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
        
        <div className={styles.socialIcons}>
          <a href="https://github.com/AhmadWajid" className={styles.socialLink} target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/in/ahmad-wajid" className={styles.socialLink} target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="ahmadwajid@ucla.edu" className={styles.socialLink}>
            <FaEnvelope />
          </a>
        </div>
        
        <div className={styles.buttonGroup}>
          <Button href="#about" text="About Me 👇" type="button-white" />
          <Button href="/files/Resume.pdf" text="Resume" type="button-white"/>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className={styles.scrollIndicator}>
        <div className={styles.scrollDown}></div>
      </div>
    </div>
  );
};

export default HeroSection;

import React, { useEffect, useState } from 'react';
import styles from './HeroSection.module.css';
import Button from '../Button/Button';
import { Typewriter } from 'react-simple-typewriter';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import technologies from '../myicons/technologies';

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
        {[...Array(15)].map((_, index) => {
          const techIcons = [
            technologies.javascript,
            technologies.python,
            technologies.react,
            technologies.html,
            technologies.css,
            technologies.gemini,
            technologies.postgres,
            technologies.firebase,
            technologies.appscript,
            technologies.pythonflask
          ];
          const randomTech = techIcons[Math.floor(Math.random() * techIcons.length)];
          const size = Math.random() * 15 + 10;
          
          return (
            <div 
              key={index}
              className={styles.techParticle}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 8}s`,
                width: `${size}px`,
                height: `${size}px`,
              }}
            >
              <img 
                src={randomTech} 
                alt="Tech icon" 
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain',
                  opacity: 0.1
                }}
              />
            </div>
          );
        })}
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
      
    </div>
  );
};

export default HeroSection;

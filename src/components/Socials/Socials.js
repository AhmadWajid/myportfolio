import React from 'react';
import styles from './socials.module.css';
import { FaDiscord, FaGithub, FaLinkedin } from 'react-icons/fa'; // Icons for platforms

const Socials = () => {
  return (
    <section className={styles.socialsSection}>
      <h2 className={styles.heading}>Connect with Me</h2>
      <div className={styles.socialsContainer}>
        <div className={styles.socialBox}>
          <FaGithub className={styles.icon} />
          <a
            href="https://github.com/AhmadWajid"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            github.com/yourusername
          </a>
        </div>
        <div className={styles.socialBox}>
          <FaLinkedin className={styles.icon} />
          <a
            href="https://www.linkedin.com/in/ahmad-wajid-80467417b/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            linkedin.com/in/yourusername
          </a>
        </div>
        <div className={styles.socialBox}>
          <FaDiscord className={styles.icon} />
          <a
            href="https://twitter.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            twitter.com/yourusername
          </a>
        </div>
      </div>
    </section>
  );
};

export default Socials;

import React from 'react';
import styles from './contact.module.css';
import { FaEnvelope, FaPhoneAlt } from 'react-icons/fa'; // For icons
import PhoneReveal from '../PhoneReveal/PhoneReveal';

const Contact = () => {
  return (
    <section className={styles.contactSection}>
      <h2 className={styles.heading}>Contact Me</h2>
      <div className={styles.contactInfo}>
        <div className={styles.infoItem}>
          <FaEnvelope className={styles.icon} />
          <a href="mailto:ahmadwajid@ucla.edu" className={styles.link}>
            ahmadwajid@ucla.edu
          </a>
        </div>
        <div className={styles.infoItem}>
          <FaPhoneAlt className={styles.icon} />
          <PhoneReveal phoneNumber="714-240-1753" displayText="(714) 240-1753" />
        </div>
      </div>
    </section>
  );
};

export default Contact;

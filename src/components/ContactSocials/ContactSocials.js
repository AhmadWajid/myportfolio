import React from 'react';
import styles from './contactSocials.module.css';
import { FaEnvelope, FaPhoneAlt, FaGithub, FaLinkedin, FaDiscord } from 'react-icons/fa';
import PhoneReveal from '../PhoneReveal/PhoneReveal';

const ContactSocials = () => {
  return (
    <section className={styles.section} id='contact'>
      <div className={styles.headingContainer}>
        <h2 className={styles.heading}>Get in Touch</h2>
        <p className={styles.subtitle}>Feel free to connect or just to say hello</p>
      </div>
      <div className={styles.container}>
        {/* Contact Information */}
        <div className={styles.box}>
          <h3 className={styles.title}>Contact</h3>
          <div className={styles.itemsWrapper}>
            <div className={styles.item}>
              <FaEnvelope className={styles.icon} />
              <a href="mailto:ahmadwajid@ucla.edu" className={styles.link}>
                ahmadwajid@ucla.edu
              </a>
            </div>
            <div className={styles.item}>
              <FaPhoneAlt className={styles.icon} />
              <PhoneReveal phoneNumber="714-240-1753" displayText="(714) 240-1753" />
            </div>
          </div>
        </div>

        {/* Social Media Links */}
        <div className={styles.box}>
          <h3 className={styles.title}>Socials</h3>
          <div className={styles.itemsWrapper}>
            <div className={styles.item}>
              <FaGithub className={styles.icon} />
              <a
                href="https://www.github.com/AhmadWajid"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
              >
                github.com/AhmadWajid
              </a>
            </div>
            <div className={styles.item}>
              <FaLinkedin className={styles.icon} />
              <a
                href="https://www.linkedin.com/in/ahmad-wajid/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
              >
                linkedin.com/in/ahmad-wajid/
              </a>
            </div>
            <div className={styles.item}>
              <FaDiscord className={styles.icon} />
              <a
                href="#!"
                className={styles.link}
              >
                insight3
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSocials;

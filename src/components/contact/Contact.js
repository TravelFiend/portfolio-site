import React from 'react';
import styles from './Contact.css';
import githubIcon from '../../../public/assets/github-icon.png';
import linkedInIcon from '../../../public/assets/linkedin-icon.png';
import instaIcon from '../../../public/assets/insta-icon.png';
import emailIcon from '../../../public/assets/email-icon.png';

const Contact = () => (
  <section className={styles.Contact}>
    <section className={styles.Icons}>
      <img src={githubIcon} />
      <img src={linkedInIcon} />
      <img src={instaIcon} />
      <img src={emailIcon} />
    </section>

    <div></div>

    <section className={styles.Links}>
      <a href="https://github.com/TravelFiend" target="_blank">/TravelFiend</a>
      <a href="https://www.linkedin.com/in/mikeegrace" target="_blank">/mikeegrace</a>
      <a href="https://www.instagram.com/mgrizzle24/" target="_blank">@mgrizzle24</a>
      <a href="mailto:mikegrace274@gmail.com">mikegrace274@gmail.com</a>
    </section>
  </section>
);

export default Contact;

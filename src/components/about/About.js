import React from 'react';
import styles from './About.css';

const About = () => {
  return (
    <div className={styles.About}>
      <div className={styles.Img1}>
        <div className={styles.mask}>Some words and stuff</div>
      </div>

      <div>Some stuff about me and stuff g</div>

      <div className={styles.Img2}>
        <div className={styles.mask}>Some words and stuff</div>
      </div>

      <div>Some stuff about me and stuff g</div>

      <div className={styles.Img3}>
        <div className={styles.mask}>Some words and stuff</div>
      </div>

      <div>Some stuff about me and stuff g</div>
    </div>
  );
};

export default About;

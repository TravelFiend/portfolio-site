import React from 'react';
import styles from './About.css';

const About = () => {
  return (
    <article className={styles.About}>
      <section className={styles.Img1}>
        <div className={styles.Mask}></div>
        <div className={styles.poop}>ndbksdjfbksdfnb</div>
      </section>

      <div className={styles.Info}>Some stuff about me and stuff g</div>

      <section className={styles.Img2}>
        <div className={styles.Mask}></div>
        <div className={styles.poop}>sdvsdfbsdbsdb</div>
      </section>

      <div className={styles.Info}>Some stuff about me and stuff g</div>

      <section className={styles.Img3}>
        <div className={styles.Mask}></div>
        <div className={styles.poop}>hkhjkjhv</div>
      </section>

      <div className={styles.Info}>Some stuff about me and stuff g</div>
    </article>
  );
};

export default About;

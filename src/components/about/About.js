import React from 'react';
import styles from './About.css';
import halfCover from '../../assets/half.png';
import html from '../../assets/html5.png';
import css from '../../assets/css3.png';
import js from '../../assets/js.png';
import node from '../../assets/node.png';
import express from '../../assets/express.png';
import git from '../../assets/git.png';
import github from '../../assets/github-icon.png';
import heroku from '../../assets/heroku.png';
import jest from '../../assets/jest.png';
import mongodb from '../../assets/mongodb.png';
import mongoose from '../../assets/mongoose.png';
import postman from '../../assets/postman.png';
import qunit from '../../assets/qunit.png';
import react from '../../assets/react.png';
import redux from '../../assets/redux.png';
import TravisCI from '../../assets/TravisCI.png';

const About = () => {
  const icon = (image, techName) => (
    <div className={styles.icon}>
      <img src={image} />
      <p>{techName}</p>
    </div>
  );

  return (
    <article className={styles.About}>
      <section className={styles.Img1}>
        <img src={halfCover} />
        <div className={styles.iconRow}>
          {icon(html, 'HTML5')}
          {icon(css, 'CSS')}
          {icon(js, 'JavaScript')}
          {icon(git, 'git')}
          {icon(github, 'github')}
        </div>

        <div className={styles.iconRow}>
          <div className={styles.icon}>
            <img style={{ width: '96%' }} src={node} />
            <p>nodeJS</p>
          </div>
          {icon(react, 'React / Native')}
          {icon(redux, 'Redux')}
          {icon(heroku, 'Heroku')}
        </div>

        <div className={styles.iconRow}>
          {icon(jest, 'Jest')}
          {icon(qunit, 'QUnit')}
          {icon(postman, 'Postman')}
          {icon(TravisCI, 'TravisCI')}
        </div>

        <div className={styles.iconRow}>
          <div className={styles.icon}>
            <img style={{ width: '87%' }} src={express} />
            <p>Express</p>
          </div>
          {icon(mongodb, 'MongoDB')}
          <div className={styles.icon}>
            <img style={{ width: '100%' }} src={mongoose} />
            <p>mongoose</p>
          </div>
        </div>
      </section>

      <div className={styles.Info}>I am a software engineer with a background in logistics and a bachelor&apos;s in fine arts. My most recent project is a mental health resources mobile app built for a Portland-based company under contract with the state of New Mexico, NMConnect, which helped that company retain their contract with New Mexico. My time working in logistics taught me the importance of organization, which translates into writing clean, well-modularized code.  </div>

      <section className={styles.Img2}>
        <div className={styles.Mask}></div>
        <div className={styles.poop}>MIDDLE PIC TEXT</div>
      </section>

      <div className={styles.Info}>Some stuff about me and stuff g</div>

      <section className={styles.Img3}>
        <div className={styles.Mask}></div>
        <div className={styles.poop}>BOTTOM PIC TEXT</div>
      </section>

      <div className={styles.Info}>Some stuff about me and stuff g</div>
    </article>
  );
};

export default About;

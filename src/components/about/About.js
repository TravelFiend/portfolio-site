import React, { useRef } from 'react';
import styles from './About.css';
import halfCover from '../../../public/assets/half.png';
import fullCover from '../../../public/assets/full.png';
import bosnia from '../../../public/assets/bosnia.jpg';
import bosniaHalf from '../../../public/assets/bosniaHalf.jpg';
import html from '../../../public/assets/html5.png';
import css from '../../../public/assets/css3.png';
import js from '../../../public/assets/js.png';
import node from '../../../public/assets/node.png';
import express from '../../../public/assets/express.png';
import git from '../../../public/assets/git.png';
import github from '../../../public/assets/github-icon.png';
import heroku from '../../../public/assets/heroku.png';
import jest from '../../../public/assets/jest.png';
import mongodb from '../../../public/assets/mongodb.png';
import mongoose from '../../../public/assets/mongoose.png';
import postman from '../../../public/assets/postman.png';
import qunit from '../../../public/assets/qunit.png';
import react from '../../../public/assets/react.png';
import redux from '../../../public/assets/redux.png';
import skydiving from '../../../public/assets/skydiving.jpg';
import beers from '../../../public/assets/beers.jpg';
import bees from '../../../public/assets/bees.jpg';
import TravisCI from '../../../public/assets/TravisCI.png';
import useDimensions from '../../hooks/dimensions';

const About = () => {
  const ref = useRef();
  const { width } = useDimensions();

  const handleClick = () => {
    ref.current.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  };

  const icon = (image, techName) => (
    <div>
      <img src={image} alt={`${techName} icon`} />
      <p>{techName}</p>
    </div>
  );

  return (
    <article className={styles.About}>
      <section style={{ backgroundImage: width > 740 ? `url(${bosnia})` : `url(${bosniaHalf})` }}>
        <img src={width > 740 ? halfCover : fullCover} alt="Mike in Bosnia" />
        <div className={styles.Divs}>
          {icon(html, 'HTML5')}
          {icon(css, 'CSS')}
          {icon(js, 'JavaScript')}
          {icon(git, 'git')}
          {icon(github, 'github')}
        </div>

        <div className={styles.Divs}>
          <div>
            <img className={styles.Wide} src={node} alt="Node Icon" />
            <p>nodeJS</p>
          </div>
          {icon(react, 'React / Native')}
          {icon(redux, 'Redux')}
          {icon(heroku, 'Heroku')}
        </div>

        <div className={styles.Divs}>
          {icon(jest, 'Jest')}
          {icon(qunit, 'QUnit')}
          {icon(postman, 'Postman')}
          {icon(TravisCI, 'TravisCI')}
        </div>

        <div className={styles.Divs}>
          <div>
            <img className={styles.Wide} src={express} alt="Express Icon" />
            <p>Express</p>
          </div>
          {icon(mongodb, 'MongoDB')}
          <div>
            <img className={styles.Wider} src={mongoose} alt="Mongoose Icon" />
            <p>mongoose</p>
          </div>
        </div>

        <div onClick={handleClick} className={styles.Round}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </section>

      <div ref={ref} className={styles.Info}>
        <p>With a BFA in printmaking from Ohio University and a decade-long career in logistics, I am able to approach problems from multiple perspectives to get them solved in creative ways.  While practicing fine arts has opened the door to thinking outside the box, my time in logistics has taught me the importance of organization.  For me, these two skills have had the greatest impact on my code, and it&apos;s paved the road to a deep addiction to software development.</p>
      </div>

      <section>
        <div className={styles.Mask}></div>
        <div><p>“Travel is rich with learning opportunities, and the ultimate souvenir is a broader perspective.” <span>-Rick Steves</span></p></div>
      </section>

      <div className={styles.Info}>
        <p>I&apos;ve always found travel to be the most rewarding of endeavors, as you will inevitably be faced with a series of challenges which will teach you new things and expand your mind.  Software development shares these traits, and because of this I&apos;ve discovered coding to be one of my passions.  Overcoming the endless obstacles presented in building out applications not only helps me grow as a developer, but as a person.</p>
      </div>

      <section>
        <div className={styles.LastMask}></div>
        <div className={styles.ImageText}>
          <img src={bees}alt="Mike holding bees" />
          <img src={skydiving}alt="Mike skydiving" />
          <img src={beers}alt="Mike and beers" />
        </div>
      </section>
    </article>
  );
};

export default About;

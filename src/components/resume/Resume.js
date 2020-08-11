import React from 'react';
import styles from './Resume.css';
import MGLogo from '../../assets/MGLogo.png';

const Resume = () => {
  const stuffForTechSection = [{
    sectionTitle: 'Languages',
    tech: ['Javascript', 'HTML', 'CSS']
  }, {
    sectionTitle: 'Testing',
    tech: ['Jest', 'QUnit', 'Enzyme']
  }, {
    sectionTitle: 'Database',
    tech: ['PostgreSQL', 'MongoDB', 'Mongoose']
  }, {
    sectionTitle: 'Backend',
    tech: ['Node.js', 'Express']
  }, {
    sectionTitle: 'Frontend',
    tech: ['React/Redux', 'React Hooks']
  }, {
    sectionTitle: 'Tools',
    tech: ['Github', 'Postman', 'Heroku', 'Netlify', 'VS Code']
  }];

  const stuffForContactSection = [{
    image: 'NEED THE PIC',
    text: 'mikegrace274@gmail.com'
  }, {
    image: 'NEED THE PIC',
    text: '440-829-5501'
  }, {
    image: 'NEED THE PIC',
    text: '/mikeegrace'
  }, {
    image: 'NEED THE PIC',
    text: '/TravelFiend'
  }];

  const techItems = stuffForTechSection.map(section => {
    const techs = section.tech.map(tech => (
      <p key={tech} className={styles.leftText}>{tech}</p>
    ));

    return (
      <li key={section.sectionTitle}>
        <h4>{section.sectionTitle}</h4>
        {techs}
      </li>
    );
  });

  const contactItems = stuffForContactSection.map(item => (
    <li key={item.text}>
      <img src={item.image} />
      <p>{item.text}</p>
    </li>
  ));

  return (
    <article className={styles.Resume}>
      <div>
        <section>
          <img src={MGLogo} />
          <h1>Mike Grace</h1>
          <h2>SOFTWARE DEVELOPER</h2>
          <span className={styles.headerLeft}>BACKGROUND & PROFILE</span>

          <p>Full-stack software developer with  a drive to create intuitive UI and  clean, memorable UX. With a history in fine arts, I have cultivated a keen eye for detail and pleasing aesthetics.  I am devoted to growing and nurturing my technical knowledge, and enjoy finding creative ways to solve intricate problems.</p>

          <span className={styles.headerLeft}>TECH KNOWLEDGE</span>

          <ul>
            {techItems}
          </ul>

          <span className={styles.headerLeft}>CONTACT DETAILS</span>

          <ul>
            {contactItems}
          </ul>
        </section>
          
        <section>
          <span>PROJECTS</span>
          <span>WORK EXPERIENCE</span>
          <span>ACADEMIC BACKGROUND</span>
        </section>
      </div>
    </article>
  );
};

export default Resume;

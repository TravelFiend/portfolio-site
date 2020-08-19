import React, { Component } from 'react';
import styles from './Resume.css';
import MGLogo from '../../assets/MGLogo.png';
import { techData, contactData, projectData } from '../../data/resumeData';

class Resume extends Component {
  techItems = techData.map(section => {
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

  contactItems = contactData.map(item => (
    <li key={item.text}>
      <img src={item.image} />
      <p>{item.text}</p>
    </li>
  ));

  projectItems = projectData.map(project => (
    <li key={project.projectName}>
      <div>
        <h4>{project.projectName}</h4>
        <p>
          <a href={project.liveLink}>{project.projectName === 'NMConnect' ? 'Apple Store' : 'Site'}</a>
        ||
          <a href={project.repoLink}>{project.projectName === 'NMConnect' ? 'Google Play Store' : 'Github'}</a>
        </p>
      </div>

      <h5>{project.techUsed}</h5>
      <p>{project.description}</p>
    </li>
  ));

  render() {
    return (
      <article className={styles.Resume}>
        <section>
          <div>
            <img src={MGLogo} />
            <h1>Mike Grace</h1>
            <h2>SOFTWARE DEVELOPER</h2>
          </div>

          <div>
            <h3>BACKGROUND & PROFILE</h3>

            <p>Full-stack software developer with  a drive to create intuitive UI and  clean, memorable UX. With a history in fine arts, I have cultivated a keen eye for detail and pleasing aesthetics.  I am devoted to growing and nurturing my technical knowledge, and enjoy finding creative ways to solve intricate problems.</p>
          </div>

          <div>
            <h3>TECH KNOWLEDGE</h3>

            <ul>
              {this.techItems}
            </ul>
          </div>

          <div>
            <h3>CONTACT DETAILS</h3>

            <ul>
              {this.contactItems}
            </ul>
          </div>
        </section>

        <section>
          <div>
            <h3>PROJECTS</h3>
            <ul>
              {this.projectItems}
            </ul>
          </div>

          <div>
            <h3>WORK EXPERIENCE</h3>

            <h4>Sykes Enterprises</h4>

            <ul>
              <li>Performed system inspections with detailed inspection notes</li>
              <li>Helped to reduce preparation and deployment time by organizing the entire inventory and streamlining workflow for increased productivity</li>
            </ul>
          </div>

          <div>
            <h3>ACADEMIC BACKGROUND</h3>

            <h4>Alchemy Code Lab</h4>
            <h5>Full-Stack Software Development 2020</h5>

            <h4>Ohio University</h4>
            <h5>BFA  in Printmaking 2011</h5>

            <ul>
              <li>Awarded scholarship for summer printmaking workshop at Anderson Ranch Arts Center, Snowmass Village, CO- Summer 2009</li>
              <li>Artist assistant for Cyndi Wish, Associate Director of Truro Center for the Arts at Castle Hill.</li>
            </ul>
          </div>
        </section>
      </article>
    );
  }
}

export default Resume;

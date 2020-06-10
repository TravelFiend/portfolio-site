import React from 'react';
import styles from './Projects.css';
import ProjectItem from './ProjectItem';
import projectPicList from '../../data/projectPicList';

const Projects = () => {
  const navButtons = projectPicList.map((item, i) => {
    const val = `#${i}`;
    return (
      <a key={item.projectName} href={val}>
        <li>
          <p>{item.projectName}</p>
        </li>
      </a>
    );
  });

  const projectItems = projectPicList.map((item, j) => (
    <li key={j} id={j}>
      <ProjectItem site={item.projectLink} code={item.repoLink} mobile={item.mobile} imageList={item.imageList} />
    </li>
  ));

  return (
    <div className={styles.Container}>
      <ul>
        {navButtons}
      </ul>
      <ul className={styles.SecondList}>
        {projectItems}
      </ul>
    </div>
  );
};

export default Projects;

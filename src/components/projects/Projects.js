import React from 'react';
import styles from './Projects.css';
import ProjectItem from './ProjectItem';
import projectPicList from '../../data/projectPicList';

const Projects = () => {
  const projectItems = projectPicList.map((item, i) => (
    <li key={i}>
      <ProjectItem projectName={item.projectName} imageList={item.imageList} />
    </li>
  ));

  return (
    <ul className={styles.Projects}>
      {projectItems}
    </ul>
  );
};

export default Projects;

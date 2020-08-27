import React, { useRef, createRef } from 'react';
import styles from './Projects.css';
import ProjectItem from './ProjectItem';
import projectPicList from '../../data/projectPicList';

const Projects = () => {
  const refs = useRef(projectPicList.map(() => createRef()));

  const navButtons = projectPicList.map((item, i) => (
    <a key={item.projectName} onClick={() => {
      refs.current[i].current.scrollIntoView({
        behavior: 'smooth',
        block: 'center'
      });
    }}>
      <li>
        <span>{item.projectName}</span>
      </li>
    </a>
  ));

  const projectItems = projectPicList.map((project, j) => (
    <li key={j} ref={refs.current[j]} id={j}>
      <ProjectItem site={project.liveLink} code={project.repoLink} about={project.about} projectName={project.projectName} mobile={project.mobile} imageList={project.imageList} />
    </li>
  ));

  return (
    <>
      <div className={styles.Container}>
        <ul>
          {navButtons}
        </ul>

        <ul className={styles.SecondList}>
          {projectItems}
        </ul>
      </div>
    </>
  );
};

export default Projects;

import React, { useRef, createRef } from 'react';
import styles from './Projects.css';
import ProjectItem from './ProjectItem';
import projectPicList from '../../data/projectPicList';

const Projects = () => {
  const refs = useRef(projectPicList.map(() => createRef()));

  const navButtons = projectPicList.map((item, i) => (
    <li key={item.projectName} onClick={() => {
      refs.current[i].current.scrollIntoView({
        behavior: 'smooth',
        block: 'center'
      });
    }}>
      {item.projectName}
    </li>
  ));

  const projectItems = projectPicList.map((project, j) => (
    <li key={j} ref={refs.current[j]}>
      <ProjectItem ref={{ ref1: refs.current[j - 1], ref2: refs.current[j + 1] }} site={project.liveLink} code={project.repoLink} about={project.about} projectName={project.projectName} mobile={project.mobile} imageList={project.imageList} />
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

import React, { useRef, createRef, useState, useEffect } from 'react';
import styles from './Work.css';
import WorkItem from './WorkItem';
import projectPicList from '../../data/projectPicList';

const Projects = () => {
  const refs = useRef(projectPicList.map(() => createRef()));
  const listRef = useRef();
  // const [percentageScrolled, setPercentageScrolled] = useState(0);

  // useEffect(() => {
  //   console.log(percentageScrolled);
  // }, [percentageScrolled]);

  // const navButtons = projectPicList.map((item, i) => (
  //   <li key={item.projectName} onClick={() => {
  //     refs.current[i].current.scrollIntoView({
  //       behavior: 'smooth',
  //       block: 'center'
  //     });
  //     setPercentageScrolled(listRef.current.scrollWidth / listRef.current.scrollLeft);
  //   }}>
  //     {item.projectName}
  //   </li>
  // ));

  const projectItems = projectPicList.map((project, j) => (
    <li key={j} ref={refs.current[j]}>
      <WorkItem ref={{ ref1: refs.current[j - 1], ref2: refs.current[j + 1] }} site={project.liveLink} code={project.repoLink} about={project.about} projectName={project.projectName} mobile={project.mobile} imageList={project.imageList} />
    </li>
  ));

  return (
    <article className={styles.Container}>
      {/* <ul>
        {navButtons}
      </ul> */}

      <ul className={styles.SecondList} ref={listRef}>
        {projectItems}
      </ul>
    </article>
  );
};

export default Projects;

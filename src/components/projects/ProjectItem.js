import React from 'react';
import styles from './ProjectItem.css';
import PropTypes from 'prop-types';

const ProjectItem = ({ projectName, picList, displayedPic }) => {
  const snapshots = picList.map((onePic, i) => (
    <li key={i}>
      <img src={onePic}/>
    </li>
  ));

  return (
    <section className={styles.ProjectItem}>
      <div>
        <p>{projectName}</p>
        <img src={displayedPic}/>
      </div>

      <ul>{snapshots}</ul>
    </section>
  );
};

ProjectItem.propTypes = {
  projectName: PropTypes.string.isRequired,
  picList: PropTypes.array.isRequired,
  displayedPic: PropTypes.bool
};

export default ProjectItem;

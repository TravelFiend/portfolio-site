import React, { useState } from 'react';
import styles from './ProjectItem.css';
import PropTypes from 'prop-types';

const ProjectItem = ({ projectName, imageList }) => {
  const [imgIndex, setImgIndex] = useState(0);

  const snapshots = imageList.map((onePic, i) => (
    <li key={i}>
      <img src={onePic} onClick={() => setImgIndex(i)} />
    </li>
  ));

  return (
    <section className={styles.ProjectItem}>
      <div>
        <p>{projectName}</p>
        <img src={imageList[imgIndex]}/>
      </div>

      <ul>{snapshots}</ul>
    </section>
  );
};

ProjectItem.propTypes = {
  projectName: PropTypes.string.isRequired,
  imageList: PropTypes.array.isRequired
};

export default ProjectItem;

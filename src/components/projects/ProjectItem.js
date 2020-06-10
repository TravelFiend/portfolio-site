import React, { useState } from 'react';
import styles from './ProjectItem.css';
import PropTypes from 'prop-types';

const ProjectItem = ({ mobile, imageList }) => {
  const [imgIndex, setImgIndex] = useState(0);

  const snapshots = imageList.map((onePic, i) => (
    <li key={i}>
      <img src={onePic} onClick={() => setImgIndex(i)} />
    </li>
  ));

  return (
    <section className={styles.ProjectItem}>
      <div>
        <img src={imageList[imgIndex]}/>
      </div>

      {mobile ? <ul className={styles.MobilePreview}>{snapshots}</ul> : <ul>{snapshots}</ul>}
    </section>
  );
};

ProjectItem.propTypes = {
  mobile: PropTypes.bool.isRequired,
  imageList: PropTypes.array.isRequired
};

export default ProjectItem;

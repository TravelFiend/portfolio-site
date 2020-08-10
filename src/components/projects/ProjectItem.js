import React, { useState } from 'react';
import styles from './ProjectItem.css';
import PropTypes from 'prop-types';

const ProjectItem = ({ site, code, mobile, imageList }) => {
  const [imgIndex, setImgIndex] = useState(0);

  const snapshots = imageList.map((onePic, i) => (
    <li key={i}>
      <img src={onePic} onClick={() => setImgIndex(i)} />
    </li>
  ));

  return (
    <section className={styles.ProjectItem}>
      <div>
        <div>
          <p>
            <a href={site}>Check it out</a>
            ||
            <a href={code}> See the code</a>
          </p>
        </div>
        <img className={mobile && styles.MobileMain} src={imageList[imgIndex]}/>
      </div>

      <ul className={mobile && styles.MobilePreview}>{snapshots}</ul>
    </section>
  );
};

ProjectItem.propTypes = {
  site: PropTypes.string.isRequired,
  code: PropTypes.string.isRequired,
  mobile: PropTypes.bool.isRequired,
  imageList: PropTypes.array.isRequired
};

export default ProjectItem;

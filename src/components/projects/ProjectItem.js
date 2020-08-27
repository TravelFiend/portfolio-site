import React, { useState, useRef, useEffect } from 'react';
import styles from './ProjectItem.css';
import PropTypes from 'prop-types';

const ProjectItem = ({ site, code, projectName, about, mobile, imageList }) => {
  const [imgIndex, setImgIndex] = useState(0);
  const [showAbout, setShowAbout] = useState(false);
  const ref = useRef();

  useEffect(() => {
    document.addEventListener('mousedown', handleClick);
    return () => {
      document.removeEventListener('mousedown', handleClick);
    };
  }, []);

  const handleClick = ({ target }) => {
    if(ref.current.contains(target)) {
      return;
    }
    // outside click 
    return setShowAbout(false);
  };

  const snapshots = imageList.map((onePic, i) => (
    <li key={i}>
      <img src={onePic} onClick={() => setImgIndex(i)} />
    </li>
  ));

  return (
    <>
      {showAbout && <div className={styles.About} ref={ref}>
        <button onClick={() => setShowAbout(false)}>Close</button>
        {about}
      </div>}
      <section className={!showAbout ? styles.ProjectItem : styles.Hidden}>
        <div className={!mobile ? styles.LeftArrow : styles.HiddenArrow}>
          <div></div>
          <div></div>
        </div>

        <div className={styles.ProjectContent}>
          <div>
            <div>
              <p onClick={() => setShowAbout(true)}>About</p>
              ||
              <a href={site}>{projectName === 'NMConnect' ? 'Apple Store' : 'Check it out'}</a>
              ||
              <a href={code}>{projectName === 'NMConnect' ? 'Google Play Store' : 'See the code'}</a>
            </div>
            <img className={mobile ? styles.MobileMain : undefined} src={imageList[imgIndex]}/>
          </div>

          <ul className={mobile ? styles.MobilePreview : undefined}>{snapshots}</ul>
        </div>
        
        <div className={projectName !== 'Offbeat' ? styles.RightArrow : styles.HiddenArrow}>
          <div></div>
          <div></div>
        </div>
      </section>
    </>
  );
};

ProjectItem.propTypes = {
  site: PropTypes.string.isRequired,
  code: PropTypes.string.isRequired,
  projectName: PropTypes.string.isRequired,
  about: PropTypes.string,
  mobile: PropTypes.bool.isRequired,
  imageList: PropTypes.array.isRequired
};

export default ProjectItem;

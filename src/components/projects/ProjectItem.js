import React, { useState, useRef, useEffect, forwardRef } from 'react';
import styles from './ProjectItem.css';
import PropTypes from 'prop-types';

const ProjectItem = forwardRef(({ site, code, projectName, about, mobile, imageList }, { ref1, ref2 }) => {
  const [imgIndex, setImgIndex] = useState(0);
  const [showAbout, setShowAbout] = useState(false);
  const aboutRef = useRef();

  useEffect(() => {
    document.addEventListener('mousedown', handleClick);
    return () => {
      document.removeEventListener('mousedown', handleClick);
    };
  }, []);

  const handleClick = ({ target }) => {
    if(aboutRef.current.contains(target)) {
      return;
    }
    // outside click 
    return setShowAbout(false);
  };

  const handlePrevClick = () => {
    ref1.current.scrollIntoView({
      behavior: 'smooth',
      block: 'center'
    });
  };

  const handleNextClick = () => {
    ref2.current.scrollIntoView({
      behavior: 'smooth',
      block: 'center'
    });
  };

  const snapshots = imageList.map((onePic, i) => (
    <li key={i}>
      <img src={onePic} onClick={() => setImgIndex(i)} />
    </li>
  ));

  return (
    <>
      {showAbout && <div className={styles.About} ref={aboutRef}>
        <button onClick={() => setShowAbout(false)}>Close</button>
        {about}
      </div>}
      <section className={!showAbout ? styles.ProjectItem : styles.Hidden}>
        <div className={!mobile ? styles.LeftArrow : styles.HiddenArrow} onClick={handlePrevClick}>
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
        
        <div className={projectName !== 'Offbeat' ? styles.RightArrow : styles.HiddenArrow} onClick={handleNextClick} >
          <div></div>
          <div></div>
        </div>
      </section>
    </>
  );
});

ProjectItem.displayName = 'ProjectItem';

ProjectItem.propTypes = {
  site: PropTypes.string.isRequired,
  code: PropTypes.string.isRequired,
  projectName: PropTypes.string.isRequired,
  about: PropTypes.string,
  mobile: PropTypes.bool.isRequired,
  imageList: PropTypes.array.isRequired
};

export default ProjectItem;

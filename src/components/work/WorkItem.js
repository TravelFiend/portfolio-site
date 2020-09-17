import React, { useState, useRef, useEffect, forwardRef } from 'react';
import styles from './WorkItem.css';
import PropTypes from 'prop-types';
import useDimensions from '../../hooks/dimensions';
import WorkButtons from '../WorkButtons';


const WorkItem = forwardRef(({ site, code, projectName, about, mobile, imageList }, { ref1, ref2 }) => {
  const [imgIndex, setImgIndex] = useState(0);
  const [showAbout, setShowAbout] = useState(false);
  const aboutRef = useRef();
  const { width } = useDimensions();

  useEffect(() => {
    document.addEventListener('mousedown', handleClick);
    return () => {
      document.removeEventListener('mousedown', handleClick);
    };
  }, []);

  const handleClick = ({ target }) => {
    if(aboutRef.current && aboutRef.current.contains(target)) {
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
    <li style={{ opacity: imgIndex === i ? 1 : 0.4 }} key={i}>
      <img src={onePic} onClick={() => setImgIndex(i)} />
    </li>
  ));

  return (
    <>
      <div className={styles.ProjectName}>
        <p>{projectName}</p>
        {width < 600 ? <div className={styles.burp}>
          <p onClick={handlePrevClick}>&lt;</p>
          <p onClick={handleNextClick}>&gt;</p>
        </div> : null}
        {width <= 800 ? <WorkButtons site={site} code={code} projectName={projectName} handleClick={() => setShowAbout(true)} /> : null}
      </div>

      {showAbout ? <div className={styles.About} ref={aboutRef}>
        <button onClick={() => setShowAbout(false)}>Close</button>
        {about}
      </div> : null}
      <section className={!showAbout ? styles.WorkItem : styles.Hidden}>
        <div className={!mobile && width > 600 ? styles.LeftArrow : styles.HiddenArrow} onClick={handlePrevClick}>
          <div></div>
          <div></div>
        </div>

        <div>
          {width > 800 ? <WorkButtons site={site} code={code} projectName={projectName} handleClick={() => setShowAbout(true)} /> : null}

          <div>
            <div style={{ backgroundImage: `url(${imageList[imgIndex]})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}></div>

            <ul className={mobile ? styles.MobilePreview : null}>{snapshots}</ul>
          </div>
        </div>

        <div className={projectName !== 'Offbeat' && width > 600 ? styles.RightArrow : styles.HiddenArrow} onClick={handleNextClick} >
          <div></div>
          <div></div>
        </div>
      </section>
    </>
  );
});

WorkItem.displayName = 'WorkItem';

WorkItem.propTypes = {
  site: PropTypes.string.isRequired,
  code: PropTypes.string.isRequired,
  projectName: PropTypes.string.isRequired,
  about: PropTypes.string,
  mobile: PropTypes.bool.isRequired,
  imageList: PropTypes.array.isRequired
};

export default WorkItem;

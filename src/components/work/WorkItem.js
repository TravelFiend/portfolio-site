import React, { useState, useRef, useEffect, forwardRef } from 'react';
import styles from './WorkItem.css';
import PropTypes from 'prop-types';
import { InfoButton, AppleButton, GoogleButton, GithubButton, WebsiteButton } from '../buttons/Buttons';
import useDimensions from '../../hooks/dimensions';


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
    <li key={i}>
      <img src={onePic} onClick={() => setImgIndex(i)} />
    </li>
  ));

  return (
    <>
      <p className={styles.ProjectName}>{projectName}</p>
      {showAbout ? <div className={styles.About} ref={aboutRef}>
        <button onClick={() => setShowAbout(false)}>Close</button>
        {about}
      </div> : null}
      <section className={!showAbout ? styles.WorkItem : styles.Hidden}>
        <div className={!mobile ? styles.LeftArrow : styles.HiddenArrow} onClick={handlePrevClick}>
          <div></div>
          <div></div>
        </div>

        <div>
          <div>
            <InfoButton handleClick={() => setShowAbout(true)} />
            {/* <img onClick={() => setShowAbout(true)} src={info} /> */}
            <a href={site} rel="noreferrer" target="_blank">{projectName === 'NMConnect' ? <AppleButton /> : <WebsiteButton />}</a>
            <a href={code} rel="noreferrer" target="_blank">{projectName === 'NMConnect' ? <GoogleButton /> : <GithubButton />}</a>
            <div></div>
          </div>

          <div>
            <div style={{ backgroundImage: `url(${imageList[imgIndex]})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}></div>

            <ul className={mobile ? styles.MobilePreview : undefined}>{snapshots}</ul>
          </div>
        </div>

        <div className={projectName !== 'Offbeat' ? styles.RightArrow : styles.HiddenArrow} onClick={handleNextClick} >
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

import React from 'react';
import { InfoButton, AppleButton, GoogleButton, GithubButton, WebsiteButton } from './buttons/Buttons';
import PropTypes from 'prop-types';
import useDimensions from '../hooks/dimensions';


const WorkButtons = ({ site, code, projectName, handleClick }) => {
  const { width } = useDimensions();

  return (
    <div>
      <InfoButton handleClick={handleClick} />
      <a href={site} rel="noreferrer" target="_blank">{projectName === 'NMConnect' ? <AppleButton /> : <WebsiteButton />}</a>
      <a href={code} rel="noreferrer" target="_blank">{projectName === 'NMConnect' ? <GoogleButton /> : <GithubButton />}</a>
      {width > 800 ? <div></div> : null}
    </div>
  );
};

export default WorkButtons;

WorkButtons.propTypes = {
  site: PropTypes.string.isRequired,
  code: PropTypes.string.isRequired,
  projectName: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired
};

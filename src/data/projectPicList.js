import columnsHome from '../assets/columnsHome.png';
import columnsLogin from '../assets/columnsLogin.png';
import columnsGame from '../assets/columnsGame.png';
import columnsAbout from '../assets/columnsAbout.png';
import covrLogin from '../assets/covrLogin.png';
import covrForm from '../assets/covrForm.png';
import covrLetter from '../assets/covrLetter.png';
import covrAbout from '../assets/covrAbout.png';
import kitHome from '../assets/kitHome.png';
import kitSettings from '../assets/kitSettings.png';
import kitList from '../assets/kitList.png';
import nmHome from '../assets/nmHome.png';
import nmButtons from '../assets/nmButtons.png';
import nmCommState from '../assets/nmCommState.png';
import nmRecovery from '../assets/nmRecovery.png';
import nmCorona from '../assets/nmCorona.png';
import nmVideo from '../assets/nmVideo.png';
import nmAudio from '../assets/nmAudio.png';
import notableHome from '../assets/notableHome.png';
import notableLogin from '../assets/notableLogin.png';
import notableNotebooks from '../assets/notableNotebooks.png';
import notableEntries from '../assets/notableEntries.png';
import offbeatHome from '../assets/offbeatHome.png';
import offbeatLogin from '../assets/offbeatLogin.png';
import offbeatRecordings from '../assets/offbeatRecordings.png';
import offbeatAbout from '../assets/offbeatAbout.png';

const projectPics = [
  {
    projectName: 'NMConnect',
    mobile: true,
    imageList: [nmHome, nmButtons, nmCommState, nmRecovery, nmCorona, nmVideo, nmAudio]
  }, {
    projectName: 'Columns and Rogues',
    mobile: false,
    imageList: [columnsHome, columnsLogin, columnsGame, columnsAbout]
  }, {
    projectName: 'CovrLettr',
    mobile: false,
    imageList: [covrLogin, covrForm, covrLetter, covrAbout]
  }, {
    projectName: 'KIT (Keep In Touch)',
    mobile: false,
    imageList: [kitHome, kitSettings, kitList]
  }, {
    projectName: 'Notable Notes',
    mobile: false,
    imageList: [notableHome, notableLogin, notableNotebooks, notableEntries]
  }, {
    projectName: 'Offbeat',
    mobile: false,
    imageList: [offbeatHome, offbeatLogin, offbeatRecordings, offbeatAbout]
  }
];

export default projectPics;

import columnsHome from '../../public/assets/columnsHome.jpg';
import columnsLogin from '../../public/assets/columnsLogin.jpg';
import columnsGame from '../../public/assets/columnsGame.jpg';
import columnsAbout from '../../public/assets/columnsAbout.jpg';
import covrLogin from '../../public/assets/covrLogin.jpg';
import covrForm from '../../public/assets/covrForm.jpg';
import covrLetter from '../../public/assets/covrLetter.jpg';
import covrAbout from '../../public/assets/covrAbout.jpg';
import kitHome from '../../public/assets/kitHome.jpg';
import kitSettings from '../../public/assets/kitSettings.png';
import kitList from '../../public/assets/kitList.jpg';
import nmHome from '../../public/assets/nmHome.jpg';
import nmButtons from '../../public/assets/nmButtons.jpg';
import nmCommState from '../../public/assets/nmCommState.jpg';
import nmRecovery from '../../public/assets/nmRecovery.jpg';
import nmCorona from '../../public/assets/nmCorona.jpg';
import nmVideo from '../../public/assets/nmVideo.jpg';
import nmAudio from '../../public/assets/nmAudio.jpg';
import notableHome from '../../public/assets/notableHome.jpg';
import notableLogin from '../../public/assets/notableLogin.jpg';
import notableNotebooks from '../../public/assets/notableNotebooks.jpg';
import notableEntries from '../../public/assets/notableEntries.jpg';
import offbeatHome from '../../public/assets/offbeatHome.jpg';
import offbeatLogin from '../../public/assets/offbeatLogin.jpg';
import offbeatRecordings from '../../public/assets/offbeatRecordings.jpg';
import offbeatAbout from '../../public/assets/offbeatAbout.jpg';

const projectPics = [
  {
    projectName: 'NMConnect',
    liveLink: 'https://apps.apple.com/us/app/nmconnect/id1505881354',  //****** apple store
    repoLink: 'https://play.google.com/store/apps/details?id=com.nmcrisisline.app',  //****** google store
    mobile: true,
    about: `React - React Native Expo - Node.js - MongoDB - Mongoose - Express - Jest
    
    An app for the State of New Mexico that provides easy-access buttons to contact the New Mexico Crisis and Access Line (NMCAL) via phone or text.  The app also provides mental health/suicide prevention resources, as well as a COVID-19 info section and a podcast section.  This project was built by myself and 1 other developer and is continuing to grow in size due to interest from other governmental departments in New Mexico.  Available now on the Apple Store and the Google Play Store!`,
    imageList: [nmHome, nmButtons, nmCommState, nmRecovery, nmCorona, nmVideo, nmAudio]
  }, {
    projectName: 'Columns and Rogues',
    liveLink: 'https://columns-and-rogues.herokuapp.com/',
    repoLink: 'https://github.com/columns-and-rogues',
    mobile: false,
    about: `HTML - CSS - Vanilla Javascript - Node.js - Express - PostgreSQL - Jest
    
    A Rogue-like game where the objective is to reach the hidden door.  Users will fight monsters and discover gold and items while attempting to find the door. With each level the board size is increased, adding an extra layer of difficulty.  This project was completed with a group of 6 developers in one week.  My roles were to help in setting up the postgreSQL database, styling, and to handle the "game over" case and accompanying graphics.`,
    imageList: [columnsHome, columnsLogin, columnsGame, columnsAbout]
  }, {
    projectName: 'CovrLettr',
    liveLink: 'https://covrlettr.netlify.app/userauth',
    repoLink: 'https://github.com/covrLettr',
    mobile: false,
    about: `HTML - CSS - Vanilla JavaScript - MongoDB - Mongoose - Express - Jest - Node.js
    
    A cover letter generator aimed towards software developers!  The user is asked to enter answers for a series of basic questions.  Those answers are then used to create over a million unique cover letters and return the version with the highest sentiment score.  This project was completed with a group of 4 developers in a single week.  I had a heavy hand in both the front-end and backend, helping build not only the basic structure of the app, but also with static/instance methods used to generate the cover letters as well as the regex needed to replace keys with user answers.`,
    imageList: [covrLogin, covrForm, covrLetter, covrAbout]
  }, {
    projectName: 'KIT (Keep In Touch)',
    liveLink: 'https://friendlier-staging.netlify.app/about',
    repoLink: 'https://github.com/band-m',
    mobile: false,
    about: `React - Redux - Express - Node.js - MongoDB - Mongoose - Passport
    
    KIT is a tool for setting and tracking communication goals. Users enter contacts and select how frequently they'd like to contact each person.  The app will then send push notification reminders based on user settings. Contacts will appear in different colors depending on how close they are to the contact deadline previously set by the user.  Incorporated DateFNs library for time oriented state management and Cron Job for regular updating.  This project was completed with a group of 4 developers in one week.  I dipped my toes into a little bit of everything for this project.`,
    imageList: [kitHome, kitSettings, kitList]
  }, {
    projectName: 'Notable Notes',
    liveLink: 'https://note-noter.herokuapp.com/',
    repoLink: 'https://github.com/TravelFiend/full-stack-with-mongo',
    mobile: false,
    about: `HTML - CSS - Vanilla Javascript - Node.js - Express - MongoDB - Mongoose - JWT - BCryptJS
    
    This is a solo project note taking app in which the user's notes and notebooks are persisted between sessions.  Users are able to create multiple notebooks for different subjects, as well as individual notes inside of each subject's notebook.  Each note and notebook are modifiable using each of the CRUD routes.`,
    imageList: [notableHome, notableLogin, notableNotebooks, notableEntries]
  }, {
    projectName: 'Offbeat',
    liveLink: 'https://travelfiend.github.io/offbeat/',
    repoLink: 'https://github.com/TravelFiend/offbeat',
    mobile: false,
    about: `HTML - CSS - Vanilla Javascript
    
    A sound sampler using Web Audio API that allows users to choose from multiple sound banks.  Once logged in, the user can record note combinations and play the same sequence back using different sound banks.  Users are also able to choose from a number of themes.  This project was completed with a team of 6 developers in a single week.  My role for this project was mainly in styling as well as handling event listeners for the sampler.`,
    imageList: [offbeatHome, offbeatLogin, offbeatRecordings, offbeatAbout]
  }
];

export default projectPics;

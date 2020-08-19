import email from '../assets/email-icon1.png';
import phone from '../assets/phone-icon1.png';
import linkedIn from '../assets/linkedin-icon1.png';
import github from '../assets/github-icon1.png';

export const techData = [{
  sectionTitle: 'Languages',
  tech: ['Javascript', 'HTML', 'CSS']
}, {
  sectionTitle: 'Testing',
  tech: ['Jest', 'QUnit', 'Enzyme']
}, {
  sectionTitle: 'Database',
  tech: ['PostgreSQL', 'MongoDB', 'Mongoose']
}, {
  sectionTitle: 'Backend',
  tech: ['Node.js', 'Express']
}, {
  sectionTitle: 'Frontend',
  tech: ['React/Redux', 'React Hooks']
}, {
  sectionTitle: 'Tools',
  tech: ['Github', 'Postman', 'Heroku', 'Netlify', 'VS Code']
}];

export const contactData = [{
  image: email,
  text: 'mikegrace274@gmail.com'
}, {
  image: phone,
  text: '440-829-5501'
}, {
  image: linkedIn,
  text: '/mikeegrace'
}, {
  image: github,
  text: '/TravelFiend'
}];

export const projectData = [{
  projectName: 'NMConnect',
  liveLink: 'https://apps.apple.com/us/app/nmconnect/id1505881354',  //****** apple store
  repoLink: 'https://play.google.com/store/apps/details?id=com.nmcrisisline.app',  //****** google store
  techUsed: 'React, React Native w/ Expo, MongoDB, Mongoose, Express, ',
  description: 'A project for the New Mexico\'s DHS.  Provides mental health resources and more!  A colleague and I created a mobile app using Expo, as well as a web app so the client is able to update resources with ease.  The two apps are connected together by a MongoDB backend.'
}, {
  projectName: 'CovrLettr',
  liveLink: '',
  repoLink: 'https://github.com/covrLettr',
  techUsed: 'React, MongoDB, Mongoose, Express, Jest, NodeJS',
  description: 'A cover letter generator that takes user input for a series of questions and creates up to a million unique cover letters and returns the version with the highest sentiment score.'
}, {
  projectName: 'Columns and Rogues',
  liveLink: 'https://columns-and-rogues.herokuapp.com/',
  repoLink: 'https://github.com/columns-and-rogues',
  techUsed: 'HTML, CSS, Vanilla Javascript, NodeJS, Express, PostgreSQL',
  description: 'Rogue-like game where the objective is to reach the hidden door.  The user will fight monsters and discover gold and items, with each level increasing the board size.'
}, {
  projectName: 'Notable Notes',
  liveLink: 'https://note-noter.herokuapp.com/',
  repoLink: 'https://github.com/TravelFiend/full-stack-with-mongo',
  techUsed: 'HTML, CSS, Vanilla Javascript, NodeJS, Express, MongoDB, Mongoose, JWT, BCryptJS',
  description: 'Simple note taking app that allows users to keep notes separated by subject.  The notes persist for each user upon login/out by utilizing a backend.'
}];

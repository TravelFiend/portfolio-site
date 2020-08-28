import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.css';
import MGLogo from '../../../public/assets/MGLogo.png';
import MGColorResume from '../../../public/assets/MGColorResume.pdf';

const Header = () => (
  <header className={styles.Header}>
    <img src={MGLogo} />
    <nav>
      <Link to='/'>
        <span>Home</span>
      </Link>

      <Link to='/about'>
        <span>About</span>
      </Link>

      <Link to='/projects'>
        <span>Work</span>
      </Link>

      <Link to='/contact'>
        <span>Contact</span>
      </Link>

      <a href={MGColorResume} target='_blank' rel='noopener noreferrer'>Printable Resume</a>
    </nav>
  </header>
);

export default Header;

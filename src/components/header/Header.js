import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.css';
import MGLogo from '../../assets/MGLogo.png';

const Header = () => (
  <header className={styles.Header}>
    <img src={MGLogo} />
    <nav>
      <Link to='/'>
        <span>Home</span>
      </Link>

      <Link to='/projects'>
        <span>Projects</span>
      </Link>

      <Link to='/about'>
        <span>About</span>
      </Link>

      <Link to='/contact'>
        <span>Contact</span>
      </Link>
    </nav>
  </header>
);

export default Header;

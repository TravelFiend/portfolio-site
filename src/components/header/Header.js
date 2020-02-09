import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.css';

const Header = () => (
  <header className={styles.Header}>
    <nav>
      <Link to='/'>
        <span>Home</span>
      </Link>

      <Link to='/about'>
        <span>About</span>
      </Link>

      <Link to='/projects'>
        <span>Projects</span>
      </Link>

      <Link to='/contact'>
        <span>Contact</span>
      </Link>
    </nav>
  </header>
);

export default Header;

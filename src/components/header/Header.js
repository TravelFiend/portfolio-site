import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import styles from './Header.css';
import MGLogo from '../../../public/assets/MGLogo.png';
import MGColorResume from '../../../public/assets/MGColorResume.pdf';

const Header = () => (
  <header className={styles.Header}>
    <img src={MGLogo} />
    <nav>
      <NavLink exact to='/' activeClassName={styles.selected}>
        Home
      </NavLink>

      <NavLink to='/about' activeClassName={styles.selected}>
        About
      </NavLink>

      <NavLink to='/projects' activeClassName={styles.selected}>
        Work
      </NavLink>

      <NavLink to='/contact' activeClassName={styles.selected}>
        Contact
      </NavLink>

      <a href={MGColorResume} target='_blank' rel='noopener noreferrer'>Printable Resume</a>
    </nav>
  </header>
);

export default Header;

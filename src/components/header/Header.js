import React, { useState, useRef, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.css';
import MGLogo from '../../../public/assets/MGLogo.png';
import MGColorResume from '../../../public/assets/MGColorResume.pdf';

const Header = () => {
  const [isShown, setIsShown] = useState(false);
  const navLinks = useRef();
  const burger = useRef();

  useEffect(() => {
    document.addEventListener('mousedown', handleClick);
    return () => {
      document.removeEventListener('mousedown', handleClick);
    };
  }, []);

  const handleClick = ({ target }) => {
    if(navLinks.current.contains(target) || burger.current.contains(target)) {
      return;
    }
    return setIsShown(false);
  };

  return (
    <header className={styles.Header}>
      <img src={MGLogo} alt="Mike's Logo" />

      <nav className={!isShown ? null : styles.navActive} ref={navLinks}>
        <NavLink exact to='/' activeClassName={styles.selected} onClick={() => setIsShown(false)}>
          Home
        </NavLink>

        <NavLink to='/about' activeClassName={styles.selected} onClick={() => setIsShown(false)}>
          About
        </NavLink>

        <NavLink to='/work' activeClassName={styles.selected} onClick={() => setIsShown(false)}>
          Work
        </NavLink>

        <NavLink to='/contact' activeClassName={styles.selected} onClick={() => setIsShown(false)}>
          Contact
        </NavLink>

        <a href={MGColorResume} target='_blank' rel='noopener noreferrer'>Printable Resume</a>
      </nav>

      <div className={styles.burger} onClick={() => setIsShown(!isShown)} ref={burger}>
        <div className={styles.line1}></div>
        <div className={styles.line2}></div>
        <div className={styles.line3}></div>
      </div>
    </header>
  );
};

export default Header;

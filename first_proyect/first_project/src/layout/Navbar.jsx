import React from 'react';

import { Link } from 'react-router-dom';

import styles from './Navbar.module.scss'

function Navbar() {
  return (
    <nav className={styles.Navbar}>
      <ul className={styles['navbar-list']}>
        <li className={styles['navbar-item']}>
          <Link to="/">Home</Link>
        </li>
        <li className={styles['navbar-item']}>
          <Link to="/about">About</Link>
        </li>
        <li className={styles['navbar-item']}>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
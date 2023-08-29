import React from 'react';
import styles from './Header.module.css';
import logo from '../../assets/logo.svg';
import search from '../../assets/icons/search.svg';
import rightArrow from '../../assets/icons/rightArrow.svg';
import { useLocation, useNavigate } from 'react-router-dom';

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const currentPath = location.pathname.split('/')[1];
  console.log(currentPath);
  return (
    <div className={styles.header}>
      <div className={styles.logo} onClick={() => navigate('/')}>
        <img src={logo} alt="logo" />
        <span className={styles.logoText}>
          Codey
        </span>
      </div>
      <div className={styles.nav}>
        <ul>
          <li className={currentPath === '' ? styles.active : ''}>
            <a href="/">Home</a>
          </li>
          <li className={currentPath === 'team' ? styles.active : ''}>
            <a href="/team">Team</a>
          </li>
          <li className={currentPath === 'events' ? styles.active : ''}>
            <a href="/events">Events</a>
          </li>
          <li className={currentPath === 'courses' ? styles.active : ''}>
            <a href="/courses">Courses</a>
          </li>
          <li className={currentPath === 'blogs' ? styles.active : ''}>
            <a href="/blogs">Blogs</a>
          </li>
        </ul>
      </div>
      <div className={styles.buttons}>
        <button className={styles.searchButton}>
          <img src={search} alt="search" />
        </button>
        <button className="button-main" onClick={() => navigate('/auth/login')}>
          <span className="button-main-text">Join Us</span>
          <span className="button-main-icon">
            <img src={rightArrow} alt="login" />
          </span>
        </button>
      </div>
    </div>
  )
}

export default Header

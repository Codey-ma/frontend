import React, { useState } from 'react';
import './index.css';
import Logo from '../../assets/codey-logo.png';
import { FaBars, FaTimes, FaSearch } from 'react-icons/fa';
import { FaArrowRight } from 'react-icons/fa';

const Navbar = () => {
  const [click, setClick] = useState(false)
const handleClick = () => setClick(!click)

  return (
    <div className="header">
      <div className="container">
        <div className="logo-container">
          <img src={Logo} className="logo" alt="Codey Logo" />
          <h1>Codey</h1>
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li><a href='/'>Home</a></li>
          <li><a href='/'>Team</a></li>
          <li><a href='/'>Events</a></li>
          <li><a href='/'>Courses</a></li>
          <li><a href='/'>Blogs</a></li>
        </ul>
        <div className="searchbar">
          <FaSearch className="search-icon" />
        </div>
        <div className="btn-group">
          <button className='btn'>Join Us <FaArrowRight style={{color: '#fff'}}/></button>
        </div>
        <div className='hamburger' onClick={handleClick}>
                    {click ? (<FaTimes size={20} style={{color: '#333'}}/>) : (<FaBars size={20} style={{color: '#333'}} />)}
                    
                </div>
      </div>
    </div>
  );
};

export default Navbar;

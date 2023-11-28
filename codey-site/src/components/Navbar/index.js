import React, { useState } from 'react';
import './index.css';
import Logo from '../../assets/codey-logo.png';
import { FaBars, FaTimes, FaSearch } from 'react-icons/fa';
import { FaArrowRight } from 'react-icons/fa';

const Navbar = () => {


  const [click, setClick] = useState(false);
  const handleClick = () => setClick(click);

  return (
    <div className="header">
      <div className="container">
        <div className="logo-container">
          <img src={Logo} className="logo" alt="Codey Logo" />
          <h1>Codey</h1>
        </div>

        <div className="menu-icon" onClick={handleClick}>
          {click ? <FaTimes /> : <FaBars className='fa-bars-btn'/>}
        </div>
        <div className={click ? 'nav-menu active' : 'nav-menu'}>

          <ul>
            <li className='nav-item'><a href='/' className='active'>Home</a></li>
            <li className='nav-item'><a href='/'>Team</a></li>
            <li className='nav-item'><a href='/'>Events</a></li>
            <li className='nav-item'><a href='/'>Courses</a></li>
            <li className='nav-item'><a href='/'>Blogs</a></li>
          </ul>

        </div>
        
        <div className="searchbar">
          <FaSearch className="search-icon" />
        </div>
        <div className="btn-group">
          <button className='btn'>
            Join Us <FaArrowRight style={{ color: '#fff', verticalAlign: 'middle', marginLeft: '5px' }}/>
          </button>
        </div>

      </div>
    </div>
  );
};

export default Navbar;

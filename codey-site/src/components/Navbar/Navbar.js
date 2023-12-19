import React, { useState } from 'react';
import './Navbar.css';
import Logo from '../../assets/codey-logo.png';
import { FaBars, FaTimes, FaSearch } from 'react-icons/fa';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Navbar = () => {


  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

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
            <li className='nav-item'><Link to='/' className='active'>Home</Link></li>
            <li className='nav-item'><Link to='/teams'>Teams</Link></li>
            <li className='nav-item'><Link to='/events'>Events</Link></li>
            <li className='nav-item'><Link to='/programs'>Programs</Link></li>
            <li className='nav-item'><Link to='/donate'>Donate</Link></li>
        
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

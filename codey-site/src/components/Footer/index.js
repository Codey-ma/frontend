import React from 'react';
import Logo from '../../assets/codey-logo.png';
import Rectangle from '../../assets/Rectangle 19.png';
import Saly from '../../assets/Saly-1.png';

const Footer = () => {
  return (
    <div className='footer'>
        <div className="container">
            <div className='col col-1'>

            <div className="logo-footer">
          <img src={Logo} className="logo" alt="Codey Logo" />
          <h1>Codey</h1>
        </div>
        <ul className="footer-menu">
          <li><a href='/'>Home</a></li>
          <li><a href='/'>Team</a></li>
          <li><a href='/'>Events</a></li>
          <li><a href='/'>Courses</a></li>
          <li><a href='/'>Blogs</a></li>
        </ul>

            </div>
        </div>

    </div>
  )
}

export default Footer
import React from 'react';
import Logo from '../../assets/codey-logo.png';
import Rectangle from '../../assets/Rectangle 19.png';
import Saly from '../../assets/Saly-1.png';
import { FaArrowRight, FaFacebook, FaInstagram, FaPinterest, FaTwitter } from 'react-icons/fa';


import './index.css'
const Footer = () => {
  return (

    <>

    <div className="before-footer">
      
    </div>
    <div className='footer'>
        <div className="container">
            <div className='row row1'>
            
                <h3>Join Us</h3>
                <h1>Join Our Community To Have<br /> access 
                to 100+ Free Resources &<br /> Events!</h1>

                <div className="btn-group">
                  <button className='btn btn-footer'>
                    Join Our Discord <FaArrowRight style={{ color: '#fff', verticalAlign: 'middle', marginLeft: '5px' }}/>
                  </button>
                </div>
            
        </div>

            <div className='row footer-row'>
            <img src={Saly} className="saly-image" alt="Saly" />
              <div className="logo-footer">
                  <img src={Logo} className="logo" alt="Codey Logo" />
                  <p className='logo-title'>Codey</p>
              </div>
              <div className="footer-menu">
                <ul >
                  <li><a href='/'>Home</a></li>
                  <li><a href='/'>Team</a></li>
                  <li><a href='/'>Events</a></li>
                  <li><a href='/'>Courses</a></li>
                  <li><a href='/'>Blogs</a></li>
                </ul>
              </div>

              <div className="social-icons">
                <a href="#"><FaInstagram/></a>
                <a href="#"><FaTwitter/></a>
                <a href="#"><FaPinterest/></a>
                <a href="#"><FaFacebook/></a>
              </div>


            </div>

        
            <div className="copyright">
              Copyright © 2023 Codey.tech
              </div>


        </div>

    </div>

    </>
  )
}

export default Footer
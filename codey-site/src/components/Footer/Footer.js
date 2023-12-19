import React from 'react';
import Logo from '../../assets/codey-logo.png';
import Saly from '../../assets/Saly-1.png';
import Saly1 from '../../assets/Saly-19.png';
import { FaArrowRight, FaFacebook, FaInstagram, FaPinterest, FaTwitter } from 'react-icons/fa';


import './Footer.css'
const Footer = ({dynamicContent}) => {
  return (

    <>

    <div className="before-footer">
      
    </div>
    <div className='footer'>
        <div className="container">
        <div className='row row1'>
            <h3>{dynamicContent.title}</h3>
            <h1>{dynamicContent.subtitle}</h1>
            <div className="btn-group">
              <button className='btn btn-footer'>
                {dynamicContent.buttonText} <FaArrowRight style={{ color: '#fff', verticalAlign: 'middle', marginLeft: '5px' }}/>
              </button>
            </div>
          </div>

            <div className='row footer-row'>
              {dynamicContent.image1 
              ?   <img src={Saly} className="saly-image" alt="Saly" /> : 
              ''
              
              }
              {dynamicContent.image2
              ? <img src={Saly1} className="saly-image1" alt="Saly" /> :
              ''
              }
              <div className="logo-footer">
                  <img src={Logo} className="logo" alt="Codey Logo" />
                  <p className='logo-title'>Codey</p>
              </div>
              <div className="footer-menu">
                <ul >
                  <li><a href='/'>Home</a></li>
                  <li><a href='/'>Teams</a></li>
                  <li><a href='/'>Programs</a></li>
                  <li><a href='/'>Events</a></li>
                  <li><a href='/'>Donate</a></li>
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
import React from 'react';
import Saly from '../../assets/Saly-10.png';
import { FaArrowRight } from 'react-icons/fa';
import './index.css'

const About = () => {
  return (
    <div className='about'>
      <div className="container">
        {/* left Side */}
        <div className="left">
            <h3 >About Us</h3>
          <h1>Codey is a Global{" "}
            Community for Youth{" "}
            Coders!{" "}
         </h1>
         <div className="paragraph">
            <p>
              Install our top-rated dropshipping app to your e-commerce site and get{" "}
              access to US Suppliers, AliExpress vendors, and the best dropshipping and{" "}
              custom products. Start selling the right products to the customer base that{" "}
              you know best. We connect you to inventory, so you can focus on creating{" "}
              a catalog of profitable products for your online store.
            </p>
              <p>
              Install our top-rated dropshipping app to your e-commerce site and get{" "}
              access to US Suppliers, AliExpress vendors, and the best dropshipping and{" "}
              custom products. Start selling the right products to the customer base that{" "}
              you know best. We connect you to inventory, so you can focus on creating{" "}
              a catalog of profitable products for your online store.
            </p>
         </div>
          <br />
        <div className="btn-group">
          <button className='btn about-btn'>
            Join Us <FaArrowRight style={{ color: '#fff', verticalAlign: 'middle', marginLeft: '5px' }}/>
          </button>
        </div>
        </div>

        {/* Right Side */}
        <div className="right">
          <div className="img-container">
            <img src={Saly} className="" id="Saly" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
import React from 'react';

import members from '../../assets/Frame 67 (1).png'
import resources from '../../assets/Frame 67 (2).png'
import staff from '../../assets/Frame 67.png'
import sponsor from '../../assets/hack-club.png';

import './index.css'

const Featured = () => {
  return (
    <div class="featured-section">
      <div class="featured-row1">

        <ul className='feature-list'>
          <li className="feature">
            <img src={staff} alt="Staff" />
            <div className="feature-text">
              <p className='header-li'>20+</p>
              <p className='under-header'>Staff</p>
            </div>
          </li>
          <li className="feature">
            <img src={members} alt="Members" />
            <div className="feature-text">
              <p className='header-li'>80+</p>
              <p className='under-header'>Members</p>
            </div>
          </li>

          <li className="feature">
            <img src={resources} alt="Resources" />
            <div className="feature-text">
              <p className='header-li'>50+</p>
              <p className='under-header'>Resources</p>
            </div>
          </li>
        </ul>   
      </div>
    <div class="featured-row2">
      <div className="sponsor-rectangle"></div>
      <div className="sponsor-rectangle"></div>
      <div className="sponsor-rectangle"></div>
      <p className='sponsors'>Sponsors</p>
      <img src={sponsor} alt="hack-club" />

      <div className="sponsor-rectangle"></div>
      <div className="sponsor-rectangle"></div>
    </div>
</div>

  )
}

export default Featured
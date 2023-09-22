import React from 'react'
import './index.css'
import Logo from '../../assets/codey-logo.png';


const Navbar = () => {
  return (
    <div className="header">
        <div className="container">
          <div className="logo-container">
            <img
              src={Logo}
              className="logo"
            />
            <h1>Codey</h1>
          </div>
          <ul className='nav-menu'>
            

          </ul>

        </div>
    </div>
  )
}

export default Navbar
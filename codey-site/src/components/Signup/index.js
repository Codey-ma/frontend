import React from 'react';
import './index.css';
import { FaFacebook, FaGoogle, FaApple } from 'react-icons/fa';
import { Link } from 'react-router-dom';


const Signup = () => {
  return (
<div class="signupContainer">
  
  <div class="Section1">
    <div class="logo-section">
    <div class="Codey">@Codey</div>
  </div>
    
  </div>

  <div class="Section2">
      <div class="SignIn">Sign up to</div>
      <div class="YourAcc">Become A Youth Coder</div>
      <p>If you already have an account, you can <Link to="/signin">Login here</Link>.</p>
  </div>


  <div class="Section3">
    <div class="SignIn">Sign Up</div>
      <input type="text" class="TextFieldOutlined" placeholder="Enter email" />
      <input type="text" class="TextFieldOutlined" placeholder="Create Username" />
      <input type="number" class="TextFieldOutlined" placeholder="Contact number" />
      <input type="password" class="TextFieldOutlined" placeholder="Password" />
      <input type="password" class="TextFieldOutlined" placeholder="Confirm Password" />
    <button class="ButtonContained2">Register</button>
      <div class="OrConti">or continue with</div>
      <div>
      <a href="#" className="social-icon">
        <FaFacebook size={32} />
      </a>
      <a href="#" className="social-icon">
        <FaGoogle size={32} />
      </a>
      <a href="#" className="social-icon">
        <FaApple size={32} />
      </a>
    </div>
      
  </div>
  
 
</div>
  )
}

export default Signup
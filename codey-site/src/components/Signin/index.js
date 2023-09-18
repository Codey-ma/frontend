import React from 'react';
import './index.css';
import { FaFacebook, FaGoogle, FaApple } from 'react-icons/fa';

const Signin = () => {
  return (
<div class="signinContainer">
  
  <div class="Section1">

    <div class="logo-section">
    <div class="Codey">@Codey</div>
  </div>
    
  </div>

  <div class="Section2">
      <div class="SignIn">Sign in to</div>
      <div class="YourAcc">Your Account</div>
      <div class="IfYouD">If you don't have an account register</div>
      <a href="/signup" class="YouCan">Register here</a>
  </div>


  <div class="Section3">
    <div class="SignIn">Sign in</div>
    <input type="text" class="TextFieldOutlined" placeholder="Enter email or user name" />
    <input type="password" class="TextFieldOutlined" placeholder="Password" />
    <div class="ForgorP">Forgot password?</div>
    <button class="ButtonContained2">Login</button>
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

export default Signin
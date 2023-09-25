import React from 'react';
import './index.css';
import { Link } from 'react-router-dom';
import Codey from '../../assets/Codey.png';
import Logo from '../../assets/codey-logo.png';
import Saly from '../../assets/Saly-14.png';
import Facebook from '../../assets/Facebook.png';
import Apple from '../../assets/apple.png';
import Google from '../../assets/google.png';

const Signup = () => {
  return (
    <div className="overflow-hidden flex flex-row w-full pt-2 px-4" id="signupContainer">
      <div className="logo-container">
        <img src={Logo} className="logo" alt="Logo" />
        <img src={Codey} className="logo logo-second" id="Codey" alt="Codey" />
      </div>
      <div className="flex flex-row gap-20 items-center mx-60" id="signup">
          <div className="flex flex-col gap-12 w-1/2" id="signup-text"> 
            <div className="text-8xl font-bold" id="Header">
              <h1>Sign Up to {" "}</h1>
            </div>
            <div className="text-4xl font-['Poppins'] font-medium">Become A Youth Coder</div>
            <br />
            <div className='underheader-text'>
              If you already have an account
              <div id="YouCanLoginrHere1">
                You can{" "}
                <Link to="/signin" className="font-semibold custom-link" id="YouCanLoginHere">Login here</Link>
              </div>
            </div>
        </div>
        <div>
        <img
            src={Saly}
            className="mt-[12px]"
            id="Saly"
          />
        </div>
        <div className="flex flex-col gap-4 h-[543px] items-center" id="signup-form">
          <div className="text-3xl font-['Poppins'] font-medium mb-3">
            Sign Up
          </div>
          <div className="">
            <input type="text" className="Text-field" placeholder="Enter email" />
          </div>
          <div className="">
            <input type="text" className="Text-field" placeholder="Create Username" />
          </div>
          <div className="">
            <input type="number" className="Text-field" placeholder="Contact number" />
          </div>
          <div className="">
            <input type="password" className="Text-field" placeholder="Password" />
          </div>
          <div className="">
            <input type="password" className="Text-field" placeholder="Confirm Password" />
          </div>
          <div className="">
            <div className="font-medium text-white">
              <button>Register</button>
            </div>
          </div>
          <div className="text-medium text-[#b5b5b5] self-center mb-6">or continue with</div>
          <div className="" id="social-icons">
            <img src={Facebook} className="w-10 shrink-0 mt-px mr-px social-icon" id="Facebook" alt="Facebook" />
            <img src={Apple} className="w-10 shrink-0 social-icon" id="Apple" alt="Apple" />
            <img src={Google} className="w-10 shrink-0 social-icon" id="Google" alt="Google" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;

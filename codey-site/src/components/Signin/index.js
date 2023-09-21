import React from 'react';
import './index.css';
import { FaFacebook, FaGoogle, FaApple } from 'react-icons/fa';
import { Link } from 'react-router-dom';

/**assets */
import Codey from '../../assets/Codey.png';
import Logo from '../../assets/codey-logo.png';
import Saly from '../../assets/Saly-14.png';
import Invisible from '../../assets/invisible.png';
import Facebook from  '../../assets/Facebook.png';
import Apple from  '../../assets/apple.png';
import Google from  '../../assets/google.png';

const Signin = () => {
  return (
<div
      className="overflow-hidden bg-white flex flex-row w-full pt-2 px-4"
      id="signinContainer"
    >
      <div className="logo-container">
        <img
          src={Logo}
          className="logo"
        />
        <img
          src={Codey}
          className="logo logo-second"
          id="Codey"
        />
      </div>


      <div className="flex flex-row gap-20 items-center mx-60" id="signin">
        <div className="flex flex-row mt-60 gap-5 w-3/5 items-center">
          <div className="flex flex-col gap-12 w-1/2">
            
              <div className="text-8xl font-['Poppins'] font-bold"
                id="Header"
              >
                <h1>Sign in to {" "}</h1>
              </div>
              <div className="text-4xl font-['Poppins'] font-medium">
                Your Account
              </div>
              <br />
            
              <div className="font-['Poppins']">
                If you don’t have an account register
              <div className="font-['Poppins']" id="YouCanRegisterHere1">
                You can{" "}
                 <Link to="/signup" className="font-semibold custom-link" id="YouCanRegisterHere">Register here</Link>
                
              </div>
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
        <div className="flex flex-col gap-4 h-[543px] items-center" id="signin-form">
          <div className="text-3xl font-['Poppins'] font-medium mb-3">
            Sign in
          </div>
          <div className="">
            <div className="font-['Poppins']">
            <input type="text" class="Text-sm input-field" placeholder="Enter email or user name" />
            </div>
          </div>
          <div className="">
          <input type="password" class="Text-sm input-field" placeholder="Password" />
            
          </div>
          <div className="text-xs font-['Poppins'] text-[#b0b0b0] self-end mb-8">
            Forgot password ?
          </div>
            <div className="font-['Poppins'] font-medium text-white">
              <button className='bg-green-500 text-white px-4 py-2 rounded-lg'>
                Login
                </button>
            </div>
          
          <div className="font-['Poppins'] text-medium text-[#b0b0b0] self-end mb-10">
            or continue with
          </div>
          <div className="flex flex-row gap-5 w-40 items-start" id="social-icons">
                <img
                  src={Facebook}
                  className="w-10 shrink-0 mt-px mr-px social-icon"
                  id="Facebook"
                />
                <img
                  src={Apple}
                  className="w-10 shrink-0 social-icon"
                  id="Apple"
                />
                <img
                  src={Google}
                  className="w-10 shrink-0 social-icon"
                  id="Google"
                />
              </div>
        </div>
      </div>
    </div>
  )
}

export default Signin
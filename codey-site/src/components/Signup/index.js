import React from 'react';
import './index.css';
import { FaFacebook, FaGoogle, FaApple } from 'react-icons/fa';
import { Link } from 'react-router-dom';


/**assets*/
import Codey from '../../assets/Codey.png';
import Logo from '../../assets/codey-logo.png';
import Saly from '../../assets/Saly-14.png';
import Invisible from '../../assets/invisible.png';
import Facebook from  '../../assets/Facebook.png';
import Apple from  '../../assets/apple.png';
import Google from  '../../assets/google.png';


const Signup = () => {
  return (
<div class="overflow-hidden bg-white flex flex-row w-full pt-2 px-4" id="signupContainer" >
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
      <div className="flex flex-row gap-20 items-center mx-60" id="signup">
        <div className="flex flex-row mt-60 gap-5 w-3/5 items-center">
          <div className="flex flex-col gap-12 w-1/2">
            
              <div className="text-8xl font-['Poppins'] font-bold"
                id="Header"
              >
                <h1>Sign Up to {" "}</h1>
              </div>
              <div className="text-4xl font-['Poppins'] font-medium">
                Become A Youth Coder
              </div>
              <br />
            
              <div className="font-['Poppins']">
                If you already have an account
              <div className="font-['Poppins']" id="YouCanLoginrHere1">
                You can{" "}
                 <Link to="/signin" className="font-semibold custom-link" id="YouCanLoginHere">Login here</Link>
                
              </div>
            </div>
          </div>
        </div>
        <div>
        <img src={Saly} class="self-end relative mt-16" id="Saly"  />
        </div>
            
            <div class="flex flex-col gap-4 h-[543px] items-cente" id="signup-form">
              <div class="text-3xl font-['Poppins'] font-medium mb-3" >
                Sign Up
              </div>

              <div class="bg-[rgba(31,_216,_145,_0.26)] flex flex-row justify-between mb-px w-[369px] h-16 shrink-0 items-center px-8 rounded-lg" >
                
                <input type="text" class="Text-sm" placeholder="Enter email " />
              </div>   
              <div class="bg-[rgba(31,_216,_145,_0.26)] flex flex-col justify-center pl-6 w-[369px] h-16 shrink-0 items-start rounded-lg" >
                <div class="text-sm font-['Poppins']" >
                <input type="text" class="Text-sm" placeholder="Create Username" />

                </div>
                </div>
                <div class="bg-[rgba(31,_216,_145,_0.26)] flex flex-col justify-center pl-6 w-[369px] h-16 shrink-0 items-start rounded-lg" >
                  <div class="font-['Poppins']" >
                    <input type="number" class="Text-sm" placeholder="Contact number" />

                  </div>
                </div>

              <div className="bg-[rgba(31,_216,_145,_0.26)] flex flex-row justify-between w-[369px] h-16 shrink-0 items-center px-8 rounded-lg">
                  <input type="password" class="Text-sm" placeholder="Password" />
                 
              </div>
              <div className="bg-[rgba(31,_216,_145,_0.26)] flex flex-row justify-between w-[369px] h-16 shrink-0 items-center px-8 rounded-lg">
                  <input type="password" class="Text-sm" placeholder="Confirm Password" />
              </div>
              <div class="shadow-[0px_4px_61px_0px_rgba(77,_71,_195,_0.4)] bg-[#1fd891] flex flex-col justify-center mb-8 w-[369px] h-16 shrink-0 items-center rounded-lg" >
                <div class="font-['Poppins'] font-medium text-white" >
                <button>Register</button>
              </div>
              </div>
              <div class="font-['Poppins'] font-medium text-[#b5b5b5] self-center mb-6" >
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

export default Signup
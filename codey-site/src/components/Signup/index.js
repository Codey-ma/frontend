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
<div class="overflow-hidden bg-white flex flex-col justify-end gap-4 w-full items-end pt-2 px-6" id="signupContainer" >
<div className="relative flex flex-col w-40 items-start">
        
        <img
          src={Logo}
          className="relative w-16"
        />
        <img
          src={Codey}
          className="w-24 h-8 absolute top-5 left-12"
          id="Codey"
        />
        
      </div>
        <div class="self-stretch flex flex-row gap-16 items-start mx-40" >
                <div class="self-end relative flex flex-row mt-10 gap-24 w-3/5 items-start" >
                <div class="text-5xl font-['Poppins'] font-semibold absolute top-0 left-0 h-20 w-64" id="SignUpTo" >
                Sign Up to
{" "}
            </div><div class="text-4xl font-['Poppins'] font-medium absolute top-16 left-2 h-12 w-[427px]" >
                Become A Youth Coder !
            </div><div class="relative flex flex-col mt-48 gap-1 items-start" >
                <div class="font-['Poppins']" >
                If you already have an account
{" "}
            </div><div class="font-['Poppins']" id="YouCanLoginHere1" >
                You can
{"   "}     <div class="font-semibold text-[#4d47c3] contents" id="YouCanLoginHere" >
                <Link to="/signin">Login here</Link>
            </div>
            </div>
            </div><img src={Saly} class="self-end relative mt-16" id="Saly"  />
            </div>
            
            <div class="flex flex-col gap-4 h-[547px] items-start" >
            <div class="text-3xl font-['Poppins'] font-medium mb-2 mr-[406px]" >
                Sign Up
            </div>

            <div class="bg-[rgba(31,_216,_145,_0.26)] flex flex-row justify-between mb-px w-[369px] h-16 shrink-0 items-center px-8 rounded-lg" >
                
                <input type="text" class="Text-sm" placeholder="Enter email " />
            </div>   
            <div class="bg-[rgba(31,_216,_145,_0.26)] flex flex-col justify-center pl-6 w-[369px] h-16 shrink-0 items-start rounded-lg" >
                <div class="text-sm font-['Poppins']" >
                <input type="text" class="Text-sm" placeholder="Create Username" />

            </div>
            </div><div class="bg-[rgba(31,_216,_145,_0.26)] flex flex-col justify-center pl-6 w-[369px] h-16 shrink-0 items-start rounded-lg" >
                <div class="font-['Poppins']" >
                <input type="number" class="Text-sm" placeholder="Contact number" />

            </div>
            </div>

            <div className="bg-[rgba(31,_216,_145,_0.26)] flex flex-row justify-between w-[369px] h-16 shrink-0 items-center px-8 rounded-lg">
                <input type="password" class="Text-sm" placeholder="Password" />
            <img
              src={Invisible}
              className="w-4 shrink-0"
              id="Invisible"
            />
           </div>
           <div className="bg-[rgba(31,_216,_145,_0.26)] flex flex-row justify-between w-[369px] h-16 shrink-0 items-center px-8 rounded-lg">
                <input type="password" class="Text-sm" placeholder="Confirm Password" />
            <img
              src={Invisible}
              className="w-4 shrink-0"
              id="Invisible"
            />
           </div>
            <div class="shadow-[0px_4px_61px_0px_rgba(77,_71,_195,_0.4)] bg-[#1fd891] flex flex-col justify-center mb-8 w-[369px] h-16 shrink-0 items-center rounded-lg" >
                <div class="font-['Poppins'] font-medium text-white" >
                <button>Register</button>
            </div>
            </div><div class="font-['Poppins'] font-medium text-[#b5b5b5] self-center mb-6" >
                or continue with
            
        
            </div>

            <div className="flex flex-row gap-5 w-40 items-start">
            <img
              src={Facebook}
              className="w-10 shrink-0 mt-px mr-px"
              id="Facebook"
            />
            <img
              src={Apple}
              className="w-10 shrink-0"
              id="Apple"
            />
            <img
              src={Google}
              className="w-10 shrink-0"
              id="Google"
            />
          </div>
         </div>
        </div>
    </div>

  )
}

export default Signup
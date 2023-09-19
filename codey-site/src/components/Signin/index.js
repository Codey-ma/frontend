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
      className="overflow-hidden bg-white flex flex-col justify-between gap-24 w-full pt-2 px-4"
      id="signinContainer"
    >
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
      <div className="flex flex-row gap-20 items-end mx-40">
        <div className="flex flex-row mt-32 gap-5 w-3/5 items-end">
          <div className="flex flex-col gap-12 w-1/2">
            <div className="flex flex-col mr-16 gap-1 items-start">
              <div
                className="text-lg font-['Poppins'] font-bold"
                id="SignInTo"
              >
                Sign in to{" "}
              </div>
              <div className="text-4xl font-['Poppins'] font-medium">
                Your Account
              </div>
            </div>
            <div className="flex flex-col ml-1 gap-1 items-start">
              <div className="font-['Poppins']">
                If you don’t have an account register
              </div>
              <div className="font-['Poppins']" id="YouCanRegisterHere1">
                You can
                {"   "}
                <div
                  className="font-semibold text-[#4d47c3] contents"
                  id="YouCanRegisterHere"
                >
                 <Link to="/signup">Register here</Link>
                </div>
              </div>
            </div>
          </div>
          <img
            src={Saly}
            className="mt-[108px]"
            id="Saly"
          />
        </div>
        <div className="flex flex-col gap-4 h-[543px] items-center">
          <div className="text-3xl font-['Poppins'] font-medium mb-3">
            Sign in
          </div>
          <div className="bg-[rgba(31,_216,_145,_0.26)] flex flex-col justify-center pl-6 w-[369px] h-16 shrink-0 items-start mb-5 mr-px rounded-lg">
            <div className="font-['Poppins']">
            <input type="text" class="Text-sm" placeholder="Enter email or user name" />
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
          <div className="text-xs font-['Poppins'] text-[#b0b0b0] self-end mb-8">
            Forgot password ?
          </div>
            <div className="font-['Poppins'] font-medium text-white"><button className='bg-green-500 text-white px-4 py-2 rounded-lg'>Login</button></div>
          
          <div className="font-['Poppins'] font-medium text-[#b5b5b5] mb-6">
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

export default Signin
import Hero from '../components/Hero/Hero';

import React from 'react'
import About from '../components/About/About';
import Footer from '../components/Footer/Footer';
import Featured from '../components/Featured';
import Educators from '../components/Educators';
import Faqs from '../components/FAQs';
import Events from '../components/Events/Events';
import Programs from '../components/Programs/Programs';
import Navbar from '../components/Navbar/Navbar';

const HomePage = () => {

  const dynamicFooterContent = {
    title: "Join Us",
   
    subtitle: (
    <div>
        Join Our Community To Have <br /> 
        Access To 100+ Free Resources &<br /> 
        Events!
      </div>
      ),
    buttonText: 'Join Our Discord',
    image1: true
  };
  return (
    <>
        <Navbar/>
        <Hero/>
        <Featured/>
        <About/>
        <Programs/>
        <Events/>
        <Educators/>
        <Faqs/>
        <Footer dynamicContent={dynamicFooterContent}/>
    
    </>
  )
}

export default HomePage
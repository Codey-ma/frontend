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
        <Footer/>
    
    </>
  )
}

export default HomePage
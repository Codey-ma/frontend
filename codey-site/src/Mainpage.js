import Navbar from './components/Navbar';
import Hero from './components/Hero';

import React from 'react'
import About from './components/About';
import Footer from './components/Footer';
import Featured from './components/Featured';
import Courses from './components/Courses';
import Educators from './components/Educators';
import Blogs from './components/Blogs';
import Faqs from './components/FAQs';

const MainPage = () => {
  return (
    <>
        <Navbar/>
        <Hero/>
        <Featured/>
        <About/>
        <Courses/>
        <Educators/>
        <Blogs/>
        <Faqs/>
        <Footer/>
    
    </>
  )
}

export default MainPage
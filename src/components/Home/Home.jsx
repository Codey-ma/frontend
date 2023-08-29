import React from 'react'
import FAQ from '../FAQ/FAQ'
import Hero from '../Hero/Hero'
import Stats from '../Stats/Stats'
import About from '../About/About'
import Info from '../Info/Info'
import Educators from '../Educators/Educators'
import OurEvents from '../OurEvents/OurEvents'
import OurBlogs from '../OurBlogs/OurBlogs'

const Home = () => {
  return (
    <div>
      <Hero/>
      <Stats/>
      <About/>
      <Info/>
      <Educators/>
      <OurEvents/>
      <OurBlogs/>
      <FAQ/>
    </div>
  )
}

export default Home

import React from 'react'
import FAQ from '../FAQ/FAQ'
import Hero from '../Hero/Hero'
import Stats from '../Stats/Stats'
import About from '../About/About'
import Info from '../Info/Info'

const Home = () => {
  return (
    <div>
      <Hero/>
      <Stats/>
      <About/>
      <Info/>
      <FAQ/>
    </div>
  )
}

export default Home

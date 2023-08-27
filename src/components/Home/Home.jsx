import React from 'react'
import FAQ from '../FAQ/FAQ'
import Hero from '../Hero/Hero'
import Stats from '../Stats/Stats'
import About from '../About/About'
import Info from '../Info/Info'
import Educators from '../Educators/Educators'

const Home = () => {
  return (
    <div>
      <Hero/>
      <Stats/>
      <About/>
      <Info/>
      <Educators/>
      <FAQ/>
    </div>
  )
}

export default Home

import React from 'react'
import './index.css'
import Educator1 from '../../assets/Educator1.png'
import Educator2 from '../../assets/Educator2.png'
import Educator3 from '../../assets/Educator3.png'

import EducatorCard from '../Utils/EducatorCard'
import Literally from '../../assets/Literally.png'
import Computer from '../../assets/Computer.png'
import Net from '../../assets/Net.png'
import Light1 from '../../assets/light1.png'
import Light2 from '../../assets/light2.png'

const Educators = () => {
  return (

        <div className="educators-section">
          <div className="Net"><img src={Net} alt="" /></div>
        <div className="title">
        <div className="light left-light"><img src={Light1} alt="" /></div>

          <h1>Our Top Educators!</h1>
          <div className="light right-light"><img src={Light2} alt="" /></div>

          <div className="literally"><img src={Literally} alt="" /></div>
            
        </div> {/* Title in the center */}
        
        
        {/* Educator Cards */}
        <div className="educator-cards">
        <div className="Computer Computer-right"><img src={Computer} alt="" /></div>
          <EducatorCard
            imageSrc={Educator1}
            name="Jacob Jones"
            occupation="Social Media Expert"
          />
          <EducatorCard
            imageSrc={Educator2}
            name="Jacob Jones"
            occupation="Web Developer"
          />
          <EducatorCard
            imageSrc={Educator3}
            name="Jacob Jones"
            occupation="Data Scientist"
          />

        <div className="Computer Computer-left"><img src={Computer} alt="" /></div>
        </div>

        <div>
        <button className='btn instructor-btn'>
            Become An Instructor
          </button>
        </div>
      </div>
  )
}

export default Educators
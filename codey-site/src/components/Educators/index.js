import React from 'react'
import Educator1 from '../../assets/Educator1.png'
import Educator2 from '../../assets/Educator2.png'
import Educator3 from '../../assets/Educator3.png'

import EducatorCard from '../Utils/EducatorCard'

const Educators = () => {
  return (

        <div className="educators-section">
        <h2>Our Educators</h2> {/* Title in the center */}
        
        {/* Educator Cards */}
        <div className="educator-cards">
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
        </div>
      </div>
  )
}

export default Educators
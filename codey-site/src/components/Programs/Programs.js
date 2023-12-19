import React, { useState } from 'react';
import './Programs.css';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

/** assets **/
import test from '../../assets/online-test 1.png'
import people from '../../assets/exam 1.png'
import calendar from '../../assets/exam 2.png'
import Rectangle from '../../assets/Rectangle 41.png'
import planet from '../../assets/planet.png'
import Arrow from '../../assets/arrow.png'
import Course from '../Utils/CourseCard';

import ArrowL from '../../assets/ArrowLeft.png'
import ArrowR from '../../assets/ArrowRight.png'

const Programs = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const handleNextSlide = () => {
    // Update the logic for sliding to the next card
    // You can adjust the logic based on your needs
    setSlideIndex((prevIndex) => (prevIndex + 1) % 3); // Assuming 3 cards for example
  };

  const handlePrevSlide = () => {
    // Update the logic for sliding to the previous card
    setSlideIndex((prevIndex) => (prevIndex - 1 + 3) % 3); // Assuming 3 cards for example
  };
  
  return (
    <div class="Programs">

        <div className='planet-img'>
                    <img src={planet} alt="" />

        </div>
      <div class="container-row1">
        <ul className='Programs-list'>
          <li className="course">
            <img src={test} alt="test" />
            <div className="course-text">
                <p>Learn The Latest<br />Skills</p>
            </div>
          </li>
          <li className="course">
            <img src={people} alt="people" />
            <div className="course-text">
              <p>Meet other Coders<br />Like You!</p>
            </div>
          </li>

          <li className="course">
            <img src={calendar} alt="calendar" />
            <div className="course-text">
              <p>Have access To Exciting<br />Events!</p>
            </div>
          </li>
        </ul>   

        
      </div>

      <div class="container-row2">
        <img src={Arrow} className='arrow' />
        <div className="title">
          <h1>Current Programs!</h1> 
          <h3>Programs That Cover every Topic in Coding! FOR FREE!</h3>
        </div>


        <div className="Programs-cards">
            <div className='grid-container'>
            <Course className={`grid-item ${slideIndex === 0 ? 'active' : ''}`} />
            <Course className={`grid-item ${slideIndex === 1 ? 'active' : ''}`} />
            <Course className={`grid-item ${slideIndex === 2 ? 'active' : ''}`} />
        
        </div>

            <div>
            <img
              src={ArrowR}
              className="right-arrow"
              alt="Right Arrow"
              onClick={handleNextSlide}
            />
            </div>
            </div>
            {/* Ellipsis dots */}
        <div className="ellipsis">
          <div className={`ellipsis-dot ${slideIndex === 0 ? 'active' : ''}`} />
          <div className={`ellipsis-dot ${slideIndex === 1 ? 'active' : ''}`} />
          <div className={`ellipsis-dot ${slideIndex === 2 ? 'active' : ''}`} />
          <div className={`ellipsis-dot ${slideIndex === 3 ? 'active' : ''}`} />
        </div>
         

      </div>
    </div>
  )
}

export default Programs
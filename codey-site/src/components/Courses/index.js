import React from 'react';
import './index.css';

/** assets **/
import test from '../../assets/online-test 1.png'
import people from '../../assets/exam 1.png'
import calendar from '../../assets/exam 2.png'
import Rectangle from '../../assets/Rectangle 41.png'
import planet from '../../assets/planet.png'
import Arrow from '../../assets/arrow.png'
import Course from '../Utils/CourseCard';

const Courses = () => {
  return (
    <div class="Courses">

        <div className='planet-img'>
                    <img src={planet} alt="" />

        </div>
      <div class="container-row1">
        <ul className='courses-list'>
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
          <h1>Our Course!</h1> 
          <h3>Courses That Cover every Topic in Coding!</h3>
        </div>
        <div className='grid-container'>
          <Course className="grid-item"/>
          <Course className="grid-item"/>
          <Course className="grid-item"/>
          <Course className="grid-item"/>
          <Course className="grid-item"/>
          <Course className="grid-item"/>
         </div>
      </div>
    </div>
  )
}

export default Courses
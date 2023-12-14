import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate
import Saly from '../../assets/Saly-38.png';
import { FaArrowRight, FaSearch } from 'react-icons/fa'; // Import FaSearch
import './index.css';

const Hero = () => {
  

  // Define the course options
  const courseOptions = [
    'Course 1',
    'Course 2',
    'Course 3',
    'Course 4',
    'Course 5',
  ];

  // State to manage the selected course
  const [selectedCourse, setSelectedCourse] = useState('');

  // Event handler for changing the selected course
  const handleCourseChange = (event) => {
    setSelectedCourse(event.target.value);
  };

  

  return (
    <div className='hero'>
      <div className="container">
        {/* left Side */}
        <div className="left">
          <h1>A Place For Youth Coders</h1>
          <p>
            Grouping youth from all over the world to{" "}
            <strong>Network</strong> <br />
            with each other, <strong>Learn</strong> together and{" "}
            <strong>Participate in</strong> in <br />
            <strong>Events</strong> in-person in Morocco, Outside or even
            <br />
            online!
          </p>
          <br />
          <br />

           {/* Use Link component to navigate to the signup page */}
           <Link to="/signup" className='btn custom-btn'>
            Register <FaArrowRight style={{ color: '#fff', verticalAlign: 'middle', marginLeft: '5px' }}/>
          </Link>
          {/* Use Link component to navigate to the signin page */}
          <Link to="/signin" className='custom-btn login-btn'>
            Login <FaArrowRight style={{ color: '#000', verticalAlign: 'middle', marginLeft: '5px' }}/>
          </Link>

          <div className="search-bar">
            <br />
            <br />
            <select
              id="course"
              value={selectedCourse}
              onChange={handleCourseChange}
              className="custom-select"
            >
              <option value="">Select a course</option>
              {courseOptions.map((course, index) => (
                <option key={index} value={course}>
                  {course}
                </option>
              ))}
            </select>

            <div class="divider"></div>

              {/* Add the search bar */}
            
              <input type="text"  className="search-input"/>
              <button className="btn search-btn">
                Search<FaSearch style={{ color: '#fff', verticalAlign: 'middle', marginLeft: '7px' }}/>
              </button>
            
          </div>

        
             
          
        </div>

        {/* Right Side */}
        <div className="right">
          <div className="img-container">
            <img src={Saly} className="SalyImg" id="Saly" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

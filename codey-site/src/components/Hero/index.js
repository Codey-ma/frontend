import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate
import Saly from '../../assets/Saly-38.png';
import './index.css';

const Hero = () => {
  const navigate = useNavigate(); // Initialize useNavigate

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

  // Event handler for the "Register" button
  const handleRegisterClick = () => {
    navigate('/signup'); // Navigate to the signup page
  };

  // Event handler for the "Login" button
  const handleLoginClick = () => {
    navigate('/signin'); // Navigate to the signin page
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

          {/* Use onClick to handle button clicks */}
          <button className='btn custom-btn' onClick={handleRegisterClick}>
            Register
          </button>
          <button className='btn custom-btn' onClick={handleLoginClick}>
            Login
          </button>

          <div>
            <br />
            <label htmlFor="course">Select a Course:</label>
            <select
              id="course"
              value={selectedCourse}
              onChange={handleCourseChange}
            >
              <option value="">Select a course</option>
              {courseOptions.map((course, index) => (
                <option key={index} value={course}>
                  {course}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Right Side */}
        <div className="right">
          <div className="img-container">
            <img src={Saly} className="" id="Saly" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

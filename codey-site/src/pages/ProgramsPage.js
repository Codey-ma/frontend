import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import './ProgramsPage.css'
import { FaSearch } from 'react-icons/fa';
import Course from '../components/Utils/CourseCard';
const ProgramsPage = () => {
  return (
    <>
    <Navbar/>
    {/* Programs section */}
    <div className="programs-page">
        <section className="programs-header">
          <h1>Our (23-24) programs!</h1>
          <p>We have courses and classes taught by Experts!</p>
          {/* Search bar */}
          <div className="search-bar">
            <select className="custom-select">
              <option value="">Select a course</option>
              {/* Add options for courses */}
            </select>
            <div className="divider"></div>
            <input type="text" className="search-input" placeholder="Search programs" />
            <button className="btn search-btn">
              Search<FaSearch style={{ color: '#fff', verticalAlign: 'middle', marginLeft: '7px' }} />
            </button>
          </div>
        </section>

        {/* Programs grid */}
        <section className="programs-grid">
          {/* Add program cards */}
          <div className='grid-container'>
            <Course/>
            <Course/>
            <Course/>
            <Course/>
            <Course/>
            <Course/>
            <Course/>
            <Course/>
            <Course/>
          </div>
        </section>
      </div>

    </>
  )
}

export default ProgramsPage

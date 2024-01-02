import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import './ProgramsPage.css'
import { FaSearch } from 'react-icons/fa';
import Course from '../components/Utils/CourseCard';

const coursesData = [
  {
    category: 'Web Development',
    rating: 5,
    title: 'Full Stack Web Development Bootcamp',
    schedule: '8 weeks',
    numberOfCourses: 20,
    tutorName: 'John Doe',
    coursePrice: 'Free',
  },
  {
    category: 'Data Science',
    rating: 4,
    title: 'Introduction to Machine Learning',
    schedule: '6 weeks',
    numberOfCourses: 15,
    tutorName: 'Jane Smith',
    coursePrice: '$49.99',
  },
  {
    category: 'Web Development',
    rating: 5,
    title: 'Full Stack Web Development Bootcamp',
    schedule: '8 weeks',
    numberOfCourses: 20,
    tutorName: 'John Doe',
    coursePrice: 'Free',
  },
  {
    category: 'Android Development',
    rating: 5,
    title: 'Android Development Bootcamp',
    schedule: '6 weeks',
    numberOfCourses: 20,
    tutorName: 'Johnathan Doe',
    coursePrice: 'Free',
  },
  {
    category: 'Cloud Computing',
    rating: 5,
    title: 'Cloud Engineer',
    schedule: '10 weeks',
    numberOfCourses: 20,
    tutorName: 'John Doe',
    coursePrice: 'Free',
  },
  {
    category: 'Cloud Engineering',
    rating: 5,
    title: 'Cloud Engineering',
    schedule: '10 weeks',
    numberOfCourses: 20,
    tutorName: 'John Doe',
    coursePrice: 'Free',
  },
  {
    category: 'Blockchain Development',
    rating: 5,
    title: 'Blockchain & Web3',
    schedule: '10 weeks',
    numberOfCourses: 20,
    tutorName: 'John Doe',
    coursePrice: 'Free',
  },
];
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
          {coursesData.map((course, i) => (
                <Course key={i} courseData={course}/>
                ))}
          </div>
        </section>
      </div>

    </>
  )
}

export default ProgramsPage

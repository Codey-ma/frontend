import React from 'react'
import './index.css'


import face from '../../assets/Rectangle 16.png'
import rocketImage from  '../../assets/Saly-43.png'
import EventCard from '../Utils/EventCard'


const Events = () => {

  return (

    <>
    
      <div className="events-header">
        <h1>Our Future <span class="event-color">Events</span></h1>
        <p>Our future events will be here</p>
      </div>
      <div className="events-section">
        <div><img src={rocketImage} alt="Rocket" className="rocket-image" /></div>
        <div className='face-container'><img src={face} alt="Rocket" className="face-image" /></div>
      <div >
        <img src={rocketImage} alt="Rocket" className="rocket-image" />
      </div>
      <div className="events-container">
        <EventCard
          title="Live Workshop in Web Development!"
          date="October 15, 2023"
          description="Join us for an exciting live workshop on web development and learn the latest trends."
        />
        <EventCard
          title="Live Workshop in Web Development!"
          date="October 15, 2023"
          description="Join us for an exciting live workshop on web development and learn the latest trends."
        />
        <EventCard
          title="Live Workshop in Web Development!"
          date="October 15, 2023"
          description="Join us for an exciting live workshop on web development and learn the latest trends."
        />
        <EventCard
          title="Live Workshop in Web Development!"
          date="October 15, 2023"
          description="Join us for an exciting live workshop on web development and learn the latest trends."
        />
        <EventCard
          title="Live Workshop in Web Development!"
          date="October 15, 2023"
          description="Join us for an exciting live workshop on web development and learn the latest trends."
        />
      </div>
    </div>

    </>
  )
}

export default Events
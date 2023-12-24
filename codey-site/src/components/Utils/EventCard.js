import React, { useState } from 'react';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import './EventCard.css'

const EventCard = ({ title, date, description }) => {

  const [showEvent, setShowEvent] = useState(false);


  const toggleEvent = ()=> {
    setShowEvent(!showEvent)
  }
  return (
    <div className="event-card">
      <div className="event-header">
        {showEvent ? <h2>{title}</h2> :<h3>Coming Soon!</h3> }
        <div className="event-icon-container" onClick={toggleEvent}>
          {showEvent ? <AiOutlineMinus /> :
          <AiOutlinePlus /> }
        </div>
      </div>
      {showEvent &&
        <div className='events-details'>
          
          <p className="event-date"><h3>Date:</h3>{date}</p>
          <p className="event-description"><h3>Description:</h3> <br />{description}</p>
          <button className="btn remind-button">Enroll</button>
        </div>
      }
      
    </div>
  );
};

export default EventCard;

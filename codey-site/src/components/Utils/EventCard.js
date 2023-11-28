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
          
          <p className="event-date">Date:{date}</p>
          <p className="event-description">{description}</p>
          <button className="btn remind-button">Remind Me</button>
        </div>
      }
      
    </div>
  );
};

export default EventCard;

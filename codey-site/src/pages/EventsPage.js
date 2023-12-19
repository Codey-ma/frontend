import React, { useState } from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import EventCard from '../components/Utils/EventPageCard';
import './EventsPage.css';

const EventsPage = () => {
  // Sample event data for online and in-person categories
  const onlineEvents = [
    { 
      id: 1, 
      title: 'Online Event 1', 
      date: '2023-01-01',
      description: 'Description for Online Event 1' },
    // To Add more online events
  ];

  const inPersonEvents = [
  
    // To Add more in-person events
  ];

  // Event categories
  const eventCategories = ['All', 'Online', 'In Person'];

  // State to track the selected event category
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Function to filter events based on the selected category
  const getFilteredEvents = () => {
    if (selectedCategory === 'Online') {
      return onlineEvents;
    } else if (selectedCategory === 'In Person') {
      return inPersonEvents;
    } else {
      // 'All' category, show all events
      return [...onlineEvents, ...inPersonEvents];
    }
  };

  // Function to handle category selection
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const dynamicFooterContent = {
    title: 'Join Us',
    subtitle: (
      <div>
        Join Our Community To Have <br />
        Access To 100+ Free Resources &<br />
        Events!
      </div>
    ),
    buttonText: 'Join Our Discord',
    image1: false,
    image2: true,
  };

  return (
    <>
      <Navbar />

      <div className="events-page">
        <h1>OUR  EVENTS!</h1>
        <section className="event-categories">
          <ul>
            {eventCategories.map((category) => (
              <li
                key={category}
                className={category === selectedCategory ? 'active' : ''}
                onClick={() => handleCategoryChange(category)}
              >
                {category}
              </li>
            ))}
          </ul>
        </section>

        <section className="event-cards">
          {getFilteredEvents().length > 0 ? (
            getFilteredEvents().map((event) => <EventCard key={event.id} event={event} />)
          ) : (
            <div className="no-events-message">Currently not available. Subscribe to our newsletter for updates!</div>
          )}
        </section>
      </div>

      <Footer dynamicContent={dynamicFooterContent} />
    </>
  );
};

export default EventsPage;

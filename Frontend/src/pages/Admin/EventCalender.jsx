import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar';

// Simulated data for events
const mockEvents = [
  "Event 1: School Annual Day",
  "Event 2: Sports Day",
  "Event 3: Parent-Teacher Meeting"
];

const EventCalendar = () => {
  const [events, setEvents] = useState(mockEvents);
  const [newEvent, setNewEvent] = useState('');
  const [error, setError] = useState(null);
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleString());
  const [sidebarOpen, setSidebarOpen] = useState(true);

  useEffect(() => {
    // Update time every second
    const timer = setInterval(() => {
      setCurrentTime(new Date().toLocaleString());
    }, 1000);

    return () => clearInterval(timer); // Cleanup interval on component unmount
  }, []);

  const addEvent = (e) => {
    e.preventDefault();
    if (newEvent.trim() === '') {
      setError('Event name cannot be empty');
      return;
    }
    setEvents([...events, newEvent]);
    setNewEvent('');
    setError(null);
  };

  return (
    <div className="flex-1 p-6 max-w-4xl mx-auto">

    {/* Sidebar */}
    <Sidebar />
      {/* Main content */}
      <div className={`flex-1 p-6 overflow-auto ${sidebarOpen ? 'ml-1/4' : ''}`}>
        <button
          className="lg:hidden p-2 bg-blue-600 text-white rounded-md"
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          {sidebarOpen ? 'Close Sidebar' : 'Open Sidebar'}
        </button>

        <h1 className="text-2xl font-bold mb-4">Events & Calendar</h1>
        <div className="mb-4 text-gray-600">Current Time: {currentTime}</div>
        <div className="bg-gray-100 p-6 rounded-lg shadow-md mb-6">Calendar</div>
        
        {/* Event form */}
        <form onSubmit={addEvent} className="bg-white p-6 rounded-lg shadow-md space-y-4">
          <h2 className="text-xl font-semibold">Add New Event</h2>
          <input
            type="text"
            value={newEvent}
            onChange={(e) => setNewEvent(e.target.value)}
            placeholder="Enter Event"
            className="w-full p-2 border border-gray-300 rounded-md"
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700 transition"
          >
            Add Event
          </button>
        </form>
        {error && <p className="text-red-500 mt-2">{error}</p>}

        {/* Event list */}
        <div className="mt-6">
          <h2 className="text-xl font-semibold">Events</h2>
          <ul className="mt-2 space-y-2">
            {events.map((event, index) => (
              <li key={index} className="bg-gray-200 p-3 rounded-md shadow">{event}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default EventCalendar;

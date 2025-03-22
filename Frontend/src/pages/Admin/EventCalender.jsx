import React, { useState, useEffect } from 'react';

// Simulated data for events
const mockEvents = [
  "Event 1: School Annual Day",
  "Event 2: Sports Day",
  "Event 3: Parent-Teacher Meeting"
];

const EventCalendar = () => {
  const [events, setEvents] = useState([]);
  const [newEvent, setNewEvent] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    // Simulate fetching events
    setEvents(mockEvents);
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
    <div className="flex">
      {/* Sidebar component is omitted for simplicity */}
      <div className="flex-1 p-6">
        <h1 className="text-2xl font-bold mb-4">Events & Calendar</h1>
        <div className="mb-4 text-gray-600">Current Time: {new Date().toLocaleString()}</div>
        <div className="bg-gray-100 p-6 rounded-lg shadow-md mb-6">Calendar</div>
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

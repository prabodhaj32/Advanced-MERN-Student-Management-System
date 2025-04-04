import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Sidebar from './Sidebar';

const EventCalendar = () => {
  const [events, setEvents] = useState([]);
  const [newEvent, setNewEvent] = useState({
    name: '',
    date: '',
    location: '',
    description: '',
  });
  const [error, setError] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());

  // Fetch events from the backend
  const fetchEvents = async () => {
    try {
      const response = await axios.get('http://localhost:8000/api/events/getall');
      setEvents(response.data.events || []);
    } catch (error) {
      console.error('Error fetching events:', error);
      setError('Error fetching events');
    }
  };

  useEffect(() => {
    fetchEvents();

    // Update time every second
    const interval = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Handle input changes
  const handleChange = (e) => {
    setNewEvent({ ...newEvent, [e.target.name]: e.target.value });
  };

  // Add a new event
  const addEvent = async (e) => {
    e.preventDefault();

    if (!newEvent.name.trim() || !newEvent.date.trim() || !newEvent.location.trim() || !newEvent.description.trim()) {
      setError('All fields are required');
      return;
    }
    setError(null);

    try {
      // Format the date as an ISO string (if needed by backend)
      const formattedEvent = {
        ...newEvent,
        date: new Date(newEvent.date).toISOString(),
      };

      const response = await axios.post('http://localhost:8000/api/events', formattedEvent);
      setEvents([...events, response.data.event]); // Add new event to list
      setNewEvent({ name: '', date: '', location: '', description: '' }); // Reset form
    } catch (error) {
      console.error('Error adding event:', error);
      setError('Error adding event');
    }
  };

  return (
    <div className="flex-1 p-6 max-w-4xl mx-auto">
      <Sidebar />
      
      {/* Main Content */}
      <div className={`flex-1 p-6 transition-all duration-300 ${sidebarOpen ? 'ml-64' : 'ml-20'}`}>
        {/* Toggle Sidebar Button */}
        <button
          className="lg:hidden p-2 bg-blue-600 text-white rounded-md mb-4"
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          {sidebarOpen ? 'Close Sidebar' : 'Open Sidebar'}
        </button>

        <h1 className="text-2xl font-bold mb-4">Events & Calendar</h1>
        <div className="mb-4 text-gray-600">Current Time: {currentTime}</div>

        {/* Calendar Placeholder */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-6 text-center">
          <p className="text-lg font-semibold text-gray-700">Calendar Feature Coming Soon</p>
        </div>

        {/* Event Form */}
        <form onSubmit={addEvent} className="bg-white p-6 rounded-lg shadow-md space-y-4">
          <h2 className="text-xl font-semibold">Add New Event</h2>

          {/* Event Name */}
          <input
            type="text"
            name="name"
            value={newEvent.name}
            onChange={handleChange}
            placeholder="Enter Event Name"
            className="w-full p-2 border border-gray-300 rounded-md"
          />

          {/* Event Date */}
          <input
            type="date"
            name="date"
            value={newEvent.date}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md"
          />

          {/* Event Location */}
          <input
            type="text"
            name="location"
            value={newEvent.location}
            onChange={handleChange}
            placeholder="Enter Event Location"
            className="w-full p-2 border border-gray-300 rounded-md"
          />

          {/* Event Description */}
          <textarea
            name="description"
            value={newEvent.description}
            onChange={handleChange}
            placeholder="Enter Event Description"
            className="w-full p-2 border border-gray-300 rounded-md"
          ></textarea>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700 transition"
          >
            Add Event
          </button>
        </form>

        {error && <p className="text-red-500 mt-2">{error}</p>}

        {/* Event List */}
        <div className="mt-6">
          <h2 className="text-xl font-semibold">Events</h2>
          <ul className="mt-2 space-y-2">
            {events.length > 0 ? (
              events.map((event, index) => (
                <li key={index} className="bg-gray-200 p-3 rounded-md shadow">
                  <strong>{event.name}</strong> - {new Date(event.date).toLocaleString()} - {event.location}
                  <p className="text-gray-600">{event.description}</p>
                </li>
              ))
            ) : (
              <p className="text-gray-500">No events available.</p>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default EventCalendar;

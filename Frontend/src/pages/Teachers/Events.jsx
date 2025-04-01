import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Sidebar from './Sidebar';

const EventSection = () => {
  const [events, setEvents] = useState([]);
  const [newEvent, setNewEvent] = useState('');
  const [error, setError] = useState(null);

  // Function to fetch events from the backend
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
  }, []);

  // Function to add a new event
  const addEvent = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/api/events', {
        event: newEvent,
      });
      setEvents([...events, response.data.event]);
      setNewEvent('');
    } catch (error) {
      console.error('Error adding event:', error);
      if (error.response && error.response.data && error.response.data.error) {
        setError(error.response.data.error);
      } else {
        setError('Error adding event');
      }
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-1/4 bg-white p-4 shadow-md">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6">
        <h1 className="text-3xl font-semibold mb-4">Events & Calendar</h1>
        <div className="text-sm text-gray-600 mb-6">
          Current Time: {new Date().toLocaleString()}
        </div>

        {/* Calendar Section */}
        <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4">Calendar</h2>
          <div className="bg-gray-100 p-4 rounded-lg">
            {/* Placeholder for the Calendar component */}
            <p className="text-gray-500">Calendar placeholder</p>
          </div>
        </div>

        {/* Add Event Section */}
        <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4">Add New Event</h2>
          <form onSubmit={addEvent} className="flex flex-col space-y-4">
            <input
              type="text"
              value={newEvent}
              onChange={(e) => setNewEvent(e.target.value)}
              placeholder="Enter Event"
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="w-full py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Add Event
            </button>
          </form>
          {error && <div className="text-red-500 mt-2">{error}</div>}
        </div>

        {/* Events List */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Events</h2>
          <ul className="space-y-2">
            {events.length === 0 ? (
              <li>No events added yet.</li>
            ) : (
              events.map((event, index) => (
                <li key={index} className="p-2 bg-gray-100 rounded-md">
                  {event}
                </li>
              ))
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default EventSection;

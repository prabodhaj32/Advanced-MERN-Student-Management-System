import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Sidebar from './Sidebar';
import { Calendar, Clock, MapPin, FileText, Plus, X, Loader2, AlertCircle } from 'lucide-react';

const EventCalendar = ({ events: eventsProp, isEmbedded = false }) => {
  const [events, setEvents] = useState(eventsProp || []);
  const [newEvent, setNewEvent] = useState({
    name: '',
    date: '',
    location: '',
    description: '',
  });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(!isEmbedded);
  const [showForm, setShowForm] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    if (!isEmbedded) {
      fetchEvents();
    } else if (eventsProp) {
      setEvents(eventsProp);
    }
    const interval = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(interval);
  }, [eventsProp, isEmbedded]);

  const fetchEvents = async () => {
    try {
      setLoading(true);
      const response = await axios.get('http://localhost:8000/api/events/getall');
      setEvents(response.data.events || []);
      setError(null);
    } catch (error) {
      console.error('Error fetching events:', error);
      setError('Error fetching events');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setNewEvent({ ...newEvent, [e.target.name]: e.target.value });
    setError(null);
  };

  const addEvent = async (e) => {
    e.preventDefault();
    if (!newEvent.name.trim() || !newEvent.date.trim() || !newEvent.location.trim() || !newEvent.description.trim()) {
      setError('All fields are required');
      return;
    }
    setError(null);

    try {
      const formattedEvent = {
        ...newEvent,
        date: new Date(newEvent.date).toISOString(),
      };
      const response = await axios.post('http://localhost:8000/api/events', formattedEvent);
      setEvents([...events, response.data.event]);
      setNewEvent({ name: '', date: '', location: '', description: '' });
      setShowForm(false);
    } catch (error) {
      console.error('Error adding event:', error);
      setError('Error adding event');
    }
  };

  // Embedded view for Dashboard
  if (isEmbedded) {
    return (
      <div className="space-y-4">
        {events.length === 0 ? (
          <p className="text-gray-500 text-center py-4">No upcoming events</p>
        ) : (
          <div className="space-y-3">
            {events.slice(0, 3).map((event, index) => (
              <div key={event._id || index} className="flex items-start space-x-3 p-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                <Calendar className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <div className="flex-1 min-w-0">
                  <h4 className="font-semibold text-gray-900">{event.name}</h4>
                  <p className="text-sm text-gray-600">{new Date(event.date).toLocaleDateString()}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }

  // Full page view
  return (
    <div className="flex min-h-screen bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/30">
      <Sidebar />
      
      <div className="flex-1 p-6 md:p-8 ml-20 md:ml-64 transition-all duration-300">
        {/* Header */}
        <div className="mb-8 animate-fade-in">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-2">Events & Calendar</h1>
              <p className="text-gray-600">Manage school events and calendar</p>
            </div>
            <button
              onClick={() => setShowForm(!showForm)}
              className="flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-200 shadow-medium hover:shadow-large transform hover:-translate-y-0.5"
            >
              <Plus className="w-5 h-5" />
              <span>Add Event</span>
            </button>
          </div>
          <div className="flex items-center space-x-2 text-gray-600">
            <Clock className="w-5 h-5" />
            <span>Current Time: {currentTime}</span>
          </div>
        </div>

        {/* Error Message */}
        {error && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl flex items-center space-x-3 animate-slide-down">
            <AlertCircle className="w-5 h-5 text-red-600" />
            <p className="text-red-700">{error}</p>
          </div>
        )}

        {/* Add Event Form */}
        {showForm && (
          <div className="bg-white rounded-2xl shadow-large p-6 md:p-8 mb-8 border border-gray-100 animate-slide-down">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-900 flex items-center space-x-2">
                <Calendar className="w-6 h-6 text-blue-600" />
                <span>Add New Event</span>
              </h2>
              <button
                onClick={() => setShowForm(false)}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <X className="w-5 h-5 text-gray-500" />
              </button>
            </div>
            <form onSubmit={addEvent} className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Event Name</label>
                <input
                  type="text"
                  name="name"
                  value={newEvent.name}
                  onChange={handleChange}
                  placeholder="Enter event name"
                  className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white"
                  required
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Event Date</label>
                  <input
                    type="date"
                    name="date"
                    value={newEvent.date}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Location</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <MapPin className="w-5 h-5 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      name="location"
                      value={newEvent.location}
                      onChange={handleChange}
                      placeholder="Enter location"
                      className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white"
                      required
                    />
                  </div>
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Description</label>
                <textarea
                  name="description"
                  value={newEvent.description}
                  onChange={handleChange}
                  placeholder="Enter event description"
                  rows={4}
                  className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white resize-none"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-200 flex items-center justify-center space-x-2 shadow-medium hover:shadow-large transform hover:-translate-y-0.5"
              >
                <Plus className="w-5 h-5" />
                <span>Add Event</span>
              </button>
            </form>
          </div>
        )}

        {/* Calendar Placeholder */}
        <div className="bg-white rounded-2xl shadow-soft p-8 mb-8 border border-gray-100 text-center animate-slide-up">
          <Calendar className="w-16 h-16 text-blue-600 mx-auto mb-4" />
          <p className="text-lg font-semibold text-gray-700">Calendar Feature Coming Soon</p>
        </div>

        {/* Events List */}
        <div className="bg-white rounded-2xl shadow-soft border border-gray-100 overflow-hidden animate-slide-up" style={{ animationDelay: '200ms' }}>
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 flex items-center space-x-2">
              <Calendar className="w-6 h-6 text-blue-600" />
              <span>Events ({events.length})</span>
            </h2>
          </div>
          {loading ? (
            <div className="p-12 text-center">
              <Loader2 className="w-12 h-12 text-blue-600 animate-spin mx-auto mb-4" />
              <p className="text-gray-600">Loading events...</p>
            </div>
          ) : events.length === 0 ? (
            <div className="p-12 text-center">
              <div className="inline-flex p-4 bg-gray-100 rounded-full mb-4">
                <Calendar className="w-12 h-12 text-gray-400" />
              </div>
              <p className="text-gray-600 text-lg">No events available</p>
              <p className="text-gray-500 text-sm mt-2">Click "Add Event" to create your first event</p>
            </div>
          ) : (
            <div className="divide-y divide-gray-200">
              {events.map((event, index) => (
                <div
                  key={event._id || index}
                  className="p-6 hover:bg-gray-50 transition-colors duration-200 animate-fade-in"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-blue-100 rounded-xl">
                      <Calendar className="w-5 h-5 text-blue-600" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{event.name}</h3>
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2 text-gray-600">
                          <Clock className="w-4 h-4" />
                          <span>{new Date(event.date).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</span>
                        </div>
                        <div className="flex items-center space-x-2 text-gray-600">
                          <MapPin className="w-4 h-4" />
                          <span>{event.location}</span>
                        </div>
                        {event.description && (
                          <div className="flex items-start space-x-2 text-gray-600 mt-2">
                            <FileText className="w-4 h-4 mt-1" />
                            <p className="text-sm">{event.description}</p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default EventCalendar;

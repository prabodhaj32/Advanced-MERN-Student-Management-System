import React from 'react';
import Sidebar from './Sidebar';

const announcements = [
  { id: 1, announcement: 'New feature release coming soon!' },
  { id: 2, announcement: 'Scheduled maintenance on Saturday, 10 PM.' },
  { id: 3, announcement: 'Join our webinar on React best practices!' },
];

const AnnouncementSection = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
       <div className="flex-1 p-6 max-w-4xl mx-auto">
       <Sidebar/>
      </div>
      <div className="w-3/4 p-6">
        <h2 className="text-2xl font-bold mb-4">Announcements</h2>
        <ul className="space-y-4">
          {announcements.map((announcement) => (
            <li key={announcement.id} className="bg-white p-4 shadow-md rounded-md">
              <h3 className="text-lg font-semibold">{announcement.announcement}</h3>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AnnouncementSection;

import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar';

const ClassSection = () => {
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    fetchClasses();
  }, []);

  const fetchClasses = () => {
    // Sample mock data for demonstration purposes
    const mockClasses = [
      { id: 1, grade: 'Grade 1' },
      { id: 2, grade: 'Grade 2' },
      { id: 3, grade: 'Grade 3' },
      { id: 4, grade: 'Grade 4' },
    ];
    setClasses(mockClasses);
  };

  return (
    <div className="flex-1 p-6 max-w-4xl mx-auto">
     <Sidebar/>
      <div className="flex-1 p-6">
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-6">Classes</h2>
          <div className="space-y-4">
            {classes.map((classItem) => (
              <div key={classItem.id} className="p-4 border border-gray-300 rounded-lg">
                <h3 className="text-lg font-semibold">{classItem.grade}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClassSection;

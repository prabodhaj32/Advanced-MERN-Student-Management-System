import React, { useState } from "react";
import Sidebar from "./Sidebar";

const Teachers = () => {
    const [newTeacher, setNewTeacher] = useState({ name: '', email: '', subject: '' });
    const [teachers, setTeachers] = useState([]);

    const handleAddTeacher = (e) => {
        e.preventDefault();
        if (newTeacher.name && newTeacher.email && newTeacher.subject) {
            setTeachers([...teachers, { ...newTeacher, id: teachers.length + 1 }]);
            setNewTeacher({ name: '', email: '', subject: '' });
        }
    };

    return (
        <div className="flex">
            <Sidebar />
            <div className="flex-1 p-6">
                <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-6">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">Teachers</h2>

                    {/* Add teachers form */}
                    <form onSubmit={handleAddTeacher} className="mb-6 space-y-3">
                        <input
                            type="text"
                            placeholder="Enter Teacher Name"
                            value={newTeacher.name}
                            onChange={(e) => setNewTeacher({ ...newTeacher, name: e.target.value })}
                            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <input
                            type="email"
                            placeholder="Enter Teacher Email"
                            value={newTeacher.email}
                            onChange={(e) => setNewTeacher({ ...newTeacher, email: e.target.value })}
                            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <input
                            type="text"
                            placeholder="Enter Teacher Subject"
                            value={newTeacher.subject}
                            onChange={(e) => setNewTeacher({ ...newTeacher, subject: e.target.value })}
                            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <button
                            type="submit"
                            className="w-full bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600 transition"
                        >
                            Add Teacher
                        </button>
                    </form>

                    {/* Display Teachers List */}
                    <ul className="mt-4">
                        {teachers.map((teacher) => (
                            <li key={teacher.id} className="border-b py-2">
                                {teacher.name} - {teacher.email} ({teacher.subject})
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Teachers;

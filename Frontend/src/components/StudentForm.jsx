import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
//import { toast } from "react-toastify";

const StudentForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    grade: "",
    image: "",
    status: "Active",
  });

  const [students, setStudents] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {
      const response = await axios.get("/api/students");
      setStudents(response.data);
    } catch (error) {
      console.error("Error fetching students:", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const submitForm = async (e) => {
    e.preventDefault();
    try {
      if (editingId !== null) {
        await axios.put(`/api/students/${editingId}`, formData);
        toast.success("Student updated successfully");
      } else {
        await axios.post("/api/students", formData);
        toast.success("Student added successfully");
      }
      fetchStudents();
      setFormData({ name: "", grade: "", image: "", age: "", status: "Active" });
      setEditingId(null);
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Something went wrong!");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100 p-6">
      <h1 className="text-3xl font-semibold mb-6">Student Management</h1>
      
      <form onSubmit={submitForm} className="bg-cyan p-6 shadow-md rounded-lg w-96 mb-6">
        <h2 className="text-xl font-semibold mb-4">{editingId !== null ? "Edit Student" : "Add Student"}</h2>

        {/* Image Preview */}
        {formData.image && (
          <div className="flex justify-center mb-3">
            <img src={formData.image} alt="Preview" className="w-20 h-20 rounded-full border shadow-md" />
          </div>
        )}

        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full mb-3 p-2 border rounded"
          required
        />
        <input
          type="text"
          name="grade"
          placeholder="Grade"
          value={formData.grade}
          onChange={handleChange}
          className="w-full mb-3 p-2 border rounded"
          required
        />
       
        <input
          type="number"
          name="age"
          placeholder="Age"
          value={formData.age}
          onChange={handleChange}
          className="w-full mb-3 p-2 border rounded"
          required
        />
         <input
          type="text"
          name="image"
          placeholder="Image URL"
          value={formData.image}
          onChange={handleChange}
          className="w-full mb-3 p-2 border rounded"
          required
        />
        
        <select name="status" value={formData.status} onChange={handleChange} className="w-full mb-3 p-2 border rounded">
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
        </select>
        
        <button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-blue font-bold py-2 rounded bg-purple">
          {editingId !== null ? "Update Student" : "Add Student"}
        </button>
        
        {editingId !== null && (
          <button
            type="button"
            onClick={() => {
              setFormData({ name: "", grade: "", image: "", age: "", status: "Active" });
              setEditingId(null);
            }}
            className="w-full mt-2 bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 rounded"
          >
            Cancel Edit
          </button>
        )}
      </form>
    </div>
  );
};

export default StudentForm;

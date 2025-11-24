import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Dashboard.css';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
  const [user, setUser] = useState(null);
  const [resumes, setResumes] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      alert("Please login");
      return;
    }

    axios.get("http://localhost:5000/api/auth/profile", {
      headers: { Authorization: token }  
    })
    .then(res => setUser(res.data))
    .catch(() => alert("Please login again"));

    axios.get("http://localhost:5000/api/resume/my-resumes", {
      headers: { Authorization: token }  
    })
    .then(res => setResumes(res.data))
    .catch(err => console.log(err));
  }, []);

  if (!user) return <p>Loading dashboard...</p>;

  return (
    <div className="dashboard">
      <h2>👋 Welcome, {user.name}</h2>
      <p>Email: {user.email}</p>

      <button 
        className="create-resume-btn"
        onClick={() => navigate('/resume')}
      >
        ✏️ Create New Resume
      </button>

      <div className="user-card">
        <h3>Your Profile Information</h3>
        <p><strong>Name:</strong> {user.name}</p>
        <p><strong>Email:</strong> {user.email}</p>
      </div>

      <h3>Your Resumes</h3>

      {resumes.length === 0 ? (
        <p>No resumes created yet</p>
      ) : (
        <table className="resume-table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Created</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {resumes.map(resume => (
              <tr key={resume._id}>
                <td>{resume.title}</td>
                <td>{new Date(resume.createdAt).toLocaleDateString()}</td>
                <td>
                  <button onClick={() => navigate(`/viewresume/${resume._id}`)}>View</button>
                  <button onClick={() => navigate(`/edit/${resume._id}`)}>Edit</button>
                  <button onClick={() => alert("Delete coming soon")}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

    </div>
  );
}

export default Dashboard;

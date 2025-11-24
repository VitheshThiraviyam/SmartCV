import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./Viewresume.css";

function ViewResume() {
  const { id } = useParams();
  const [resume, setResume] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");

    axios.get(`http://localhost:5000/api/resume/view/${id}`, {
      headers: { Authorization: `Bearer ${token}` }
    })
    .then(res => {
      setResume(res.data);
      setLoading(false);
    })
    .catch(err => {
      console.error(err.response?.data || err);
      setLoading(false);
      setResume(null);
    });
  }, [id]);

  if (loading) return <p>Loading resume...</p>;
  if (!resume) return <p>Resume not found</p>;

  return (
    <div className="resume-card">
      <h2>{resume.title}</h2>
      <p><strong>Summary:</strong> {resume.summary}</p>
      <p><strong>Skills:</strong> {resume.skills?.join(", ")}</p>

      <p><strong>Experience:</strong></p>
      <ul>
        {resume.experience?.map((exp, index) => <li key={index}>{exp}</li>)}
      </ul>

      <p><strong>Education:</strong></p>
      <ul>
        {resume.education?.map((edu, index) => <li key={index}>{edu}</li>)}
      </ul>

      {resume.achievements?.length > 0 && (
        <>
          <p><strong>Achievements:</strong></p>
          <ul>
            {resume.achievements.map((ach, index) => <li key={index}>{ach}</li>)}
          </ul>
        </>
      )}
    </div>
  );
}

export default ViewResume;

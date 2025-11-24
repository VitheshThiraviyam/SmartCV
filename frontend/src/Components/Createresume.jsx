import React, { useState } from "react";
import axios from "axios";
import "./Createresume.css";

function CreateResume() {
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [skills, setSkills] = useState("");
  const [experience, setExperience] = useState("");
  const [education, setEducation] = useState("");
  const [achievements, setAchievements] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");
      const res = await axios.post(
        "http://localhost:5000/api/resume/create",
        {
          title,
          summary,
          skills: skills.split(","),
          experience,
          education,
          achievements: achievements.split(",")
        },
        {
          headers: { Authorization: token }
        }
      );
      alert("Resume Created Successfully");
      console.log(res.data);
    } catch {
      alert("Failed to create resume");
    }
  };

  return (
    <div className="create-resume-container">
      <div className="create-resume-box">
        <h2>Create Resume</h2>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Resume Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />

          <textarea
            placeholder="Professional Summary"
            value={summary}
            onChange={(e) => setSummary(e.target.value)}
            required
          />

          <textarea
            placeholder="Skills (comma separated)"
            value={skills}
            onChange={(e) => setSkills(e.target.value)}
            required
          />

          <textarea
            placeholder="Experience Details"
            value={experience}
            onChange={(e) => setExperience(e.target.value)}
            required
          />

          <textarea
            placeholder="Education Details"
            value={education}
            onChange={(e) => setEducation(e.target.value)}
            required
          />

          <textarea
            placeholder="Achievements (comma separated)"
            value={achievements}
            onChange={(e) => setAchievements(e.target.value)}
          />

          <button type="submit">Create Resume</button>
        </form>
      </div>
    </div>
  );
}

export default CreateResume;

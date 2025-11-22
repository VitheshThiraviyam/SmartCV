import React from "react";
import './Home.css';
import { Link } from "react-router-dom";

function Home() {
    return (
        <div>
            <div className="main">

                <section className="hero">
                    <h1 className="hero-title">Build Your Perfect Resume in Seconds</h1>
                    <p className="hero-subtitle">
                        AI-powered resume generator that creates ATS-friendly, professional resumes tailored to your dream job.
                    </p>
                    <Link to ={'/login'}><button className="hero-btn">Create Resume →</button></Link>
                </section>

                <section className="features">
                    <h2>Why Choose Our AI Resume Builder?</h2>

                    <div className="feature-cards">
                        <div className="card">🧠 AI-Generated Resume</div>
                        <div className="card">📄 Multiple Templates</div>
                        <div className="card">🔍 ATS-Friendly Output</div>
                        <div className="card">✨ Auto-Filled Sections</div>
                        <div className="card">💼 Job Role Optimized</div>
                        <div className="card">📥 Export as PDF or DOCX</div>
                    </div>
                </section>

                <section className="steps">
                    <h2>Build Your Resume in 3 Easy Steps</h2>
                    <ol>
                        <li>Enter your basic details</li>
                        <li>AI generates your resume content</li>
                        <li>Download and apply instantly</li>
                    </ol>
                </section>

            </div>
        </div>
    );
}

export default Home;

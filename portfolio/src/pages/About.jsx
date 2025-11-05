import React from "react";
import ProfileImage from "../components/ProfileImage";
import "../App.css";
import CareerTimeline from "../components/CareerTimeline";

const About = () => {
  return (
    <main className="content-wrapper">
      {/* Profile photo */}
      <ProfileImage size={120} />

      {/* About Section */}
      <section className="card about-section">
        <h2>About Me</h2>
        <p>
          I’m <strong>Dr. Abhisakh Sarma</strong>, an experimental physicist with
          a deep background in laser-based spectroscopy, large-scale
          instrumentation, and data analysis. I recently concluded my work at
          the <strong>European XFEL (EuXFEL)</strong> in Hamburg (until May 2025),
          where I developed and optimized advanced photon diagnostics and
          contributed to high-precision measurement systems supporting
          ultrafast X-ray experiments.
        </p>

        <p>
          Over the years I’ve authored and co-authored more than 30 scientific
          publications, collaborating with international teams across Europe
          and Asia. My research centered on spectroscopy, vacuum instrumentation,
          and optical systems, combining hands-on experimental work with
          computational data interpretation and automation.
        </p>

        <p>
          In June 2025 I began an intensive AI Engineering and Software Development
          training at the <strong>Masterschool Institute of Technology, Berlin</strong>,
          funded by the Bundesagentur für Arbeit. This transition builds on my
          physics and data-driven experience, enabling me to bridge scientific
          problem-solving with modern technologies in machine learning,
          data science, and AI systems engineering.
        </p>

        <p>
          My goal is to integrate my physics intuition with modern software and
          AI tools to develop intelligent, data-centric solutions for scientific
          research, healthcare innovation, and industrial automation. I’m
          particularly interested in explainable AI, computer vision, and
          predictive modeling for real-world experiments.
        </p>

        <p>
          I bring a multidisciplinary mindset — a mix of physics, programming,
          and curiosity — to every project I work on. Whether developing
          algorithms, building instrumentation control interfaces, or teaching,
          I thrive on translating complex data into meaningful insight.
        </p>

        <div className="about-highlights">
          <h3>Core Competencies</h3>
          <ul>
            <li>Experimental Physics & Laser Spectroscopy</li>
            <li>Data Analysis & Statistical Modeling (Python, NumPy, Pandas)</li>
            <li>Machine Learning & AI Engineering (scikit-learn, TensorFlow)</li>
            <li>Software Development & Version Control (Git, GitHub)</li>
            <li>Scientific Instrumentation & Control Systems (LabVIEW, MATLAB)</li>
            <li>Collaborative Research & Scientific Writing</li>
          </ul>
        </div>
        {/* New Timeline Section */}
        <CareerTimeline />
        <div className="about-links">
          <a
            href="https://github.com/abhisakh"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub Profile
          </a>
          <a
            href="https://www.linkedin.com/in/dr-abhisakh-sarma"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn Profile
          </a>
          <a
            href="https://orcid.org/0000-0002-0785-8902"
            target="_blank"
            rel="noopener noreferrer"
          >
            ORCID Publications
          </a>
        </div>
      </section>
    </main>
  );
};

export default About;

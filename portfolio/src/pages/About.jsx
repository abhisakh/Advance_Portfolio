// src/pages/About.jsx
import React from 'react';
import profile from '../data/profileData';
import CardSection from '../components/CardSection';
import ProfileImage from '../components/ProfileImage';

const About = () => {
  return (
    <main className="content-wrapper">
      <ProfileImage size={120} />

      {/* Summary */}
      <section className="card">
        <h2>About Me</h2>
        <p style={{ color: '#bbb', lineHeight: 1.6 }}>
          {profile.summary}
        </p>
      </section>
      <CardSection title="Current Focus">
        <p style={{ color: '#ccc', lineHeight: 1.6 }}>
          I’m currently enrolled in an intensive Weiterbildung in <strong>Software Engineering & Data Science</strong> —
          combining AI model development, data pipeline design, and cloud-based MLOps workflows.
          This training builds on my physics background, bridging experimental problem-solving
          with intelligent data-driven applications.
        </p>
      </CardSection>
      {/* Experience Timeline */}
      <CardSection title="Experience Timeline">
        {profile.experience.map((exp, index) => (
          <div key={index} className="timeline-item" style={{ marginBottom: '1.5rem' }}>
            <h3 style={{ color: 'var(--accent-color)' }}>
              {exp.role} — {exp.org}
            </h3>
            <p style={{ color: '#aaa', marginBottom: '0.25rem' }}>
              {exp.start} – {exp.end}
            </p>
            <ul style={{ color: '#ccc', marginLeft: '1rem' }}>
              {exp.bullets.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
          </div>
        ))}
      </CardSection>

      {/* Skills Section */}
      <CardSection title="Core Skills">
        <div className="skills-grid" style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem', justifyContent: 'center' }}>
          {Object.entries(profile.skills).map(([group, items]) => (
            <div key={group}>
              <h4 style={{ color: 'var(--accent-color)' }}>
                {group.charAt(0).toUpperCase() + group.slice(1)}
              </h4>
              <ul style={{ listStyle: 'none', padding: 0, color: '#ccc' }}>
                {items.map((skill) => (
                  <li key={skill}>• {skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </CardSection>

      {/* Education */}
      <CardSection title="Education">
        {profile.education.map((edu, i) => (
          <div key={i} style={{ marginBottom: '0.75rem' }}>
            <h4 style={{ color: 'var(--accent-color)' }}>{edu.degree}</h4>
            <p style={{ color: '#ccc' }}>
              {edu.school} — {edu.start} to {edu.end}
            </p>
          </div>
        ))}
      </CardSection>
    </main>
  );
};

export default About;

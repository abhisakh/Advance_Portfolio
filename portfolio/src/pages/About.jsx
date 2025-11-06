// src/pages/About.jsx
import React, { useEffect } from "react"; // 👈 IMPORT useEffect
import profile from "../data/profileData";
import CareerTimeline from "../components/CareerTimeline";
import ProfileImage from "../components/ProfileImage";
import CardSection from "../components/CardSection";

const About = () => {

  // ----------------------------------------------------
  // ✅ IMPLEMENTATION OF INTERSECTION OBSERVER FOR SCROLL-REVEAL
  // ----------------------------------------------------
  useEffect(() => {
    // 1. Target the elements that need to be revealed
    const timelineItems = document.querySelectorAll('.timeline-item');

    // 2. Define the observer's settings
    const observerOptions = {
      root: null, // relative to the viewport
      rootMargin: "0px",
      threshold: 0.1 // trigger when 10% of the item is visible
    };

    // 3. Create the observer function
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Add the visible class, which switches opacity from 0 to 1
          entry.target.classList.add('is-visible');
          // Stop observing this element since it is now visible
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // 4. Start observing each timeline item
    timelineItems.forEach(item => {
      observer.observe(item);
    });

    // 5. Cleanup function: stop observing when the component unmounts
    return () => {
      timelineItems.forEach(item => {
        // Need to check if it's still being observed before unobserving
        if (item) {
           observer.unobserve(item);
        }
      });
    };
  }, []); // Empty dependency array ensures this runs only once after the initial render
  // ----------------------------------------------------

  return (
    <main className="content-wrapper">
      {/* Top Profile Image */}
      <ProfileImage size={120} />

      {/* Intro Section */}
      <CardSection title={`About ${profile.name}`}>
        <p className="headline">{profile.headline}</p>
        <p>{profile.summary}</p>

        <p>
          <strong>Location:</strong> {profile.location} <br />
          <strong>Email:</strong> <a href={`mailto:${profile.email}`}>{profile.email}</a>
        </p>

        <div className="contact-links">
          <a href={profile.links.github} target="_blank" rel="noreferrer">GitHub</a>
          <a href={profile.links.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          <a href={profile.links.orcid} target="_blank" rel="noreferrer">ORCID</a>
        </div>
      </CardSection>

      {/* Education Timeline */}
      <section className="timeline">
        <h3>Education</h3>
        <div className="timeline-container">
          {profile.education.map((edu, index) => (
            <div key={index} className="timeline-item"> {/* These items will now be revealed */}
              <div className="timeline-marker" />
              <div className="timeline-content">
                <h4>{edu.degree}</h4>
                <p className="timeline-institution">{edu.school}</p>
                <p className="timeline-date">
                  {edu.start} – {edu.end}
                </p>
                {edu.description && (
                  <p className="timeline-details">{edu.description}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="timeline">
        <h3>Professional Experience</h3>
        <div className="timeline-container">
          {profile.experience.map((exp, index) => (
            <div key={index} className="timeline-item"> {/* These items will now be revealed */}
              <div className="timeline-marker" />
              <div className="timeline-content">
                <h4>{exp.role}</h4>
                <p className="timeline-institution">
                  {exp.org} — {exp.location}
                </p>
                <p className="timeline-date">
                  {exp.start} – {exp.end}
                </p>
                <ul className="timeline-details">
                  {exp.bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <CardSection title="Skills & Tools">
        <ul>
          <li><strong>Experimental:</strong> {profile.skills.experimental.join(", ")}</li>
          <li><strong>Programming:</strong> {profile.skills.programming.join(", ")}</li>
          <li><strong>AI & Data:</strong> {profile.skills.ai.join(", ")}</li>
          <li><strong>Tools:</strong> {profile.skills.tools.join(", ")}</li>
        </ul>
      </CardSection>

      {/* Personal Info */}
      <CardSection title="Additional Info">
        <p><strong>Languages:</strong> {profile.languages.join(", ")}</p>
        <p><strong>Publications:</strong> {profile.publicationsCount} peer-reviewed papers</p>
        <p><strong>Interests:</strong> {profile.interests.join(", ")}</p>
      </CardSection>
    </main>
  );
};

export default About;
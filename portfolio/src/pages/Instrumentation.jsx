// src/pages/Instrumentation.jsx
import React, { useEffect } from "react";
import profile from "../data/profileData";
import CardSection from "../components/CardSection";
import ProfileImage from "../components/ProfileImage";
import PageLayout from "../components/PageLayout";
import "../styles/instrumentation.css";

const Instrumentation = () => {

  // Fade-in animation on scroll
  useEffect(() => {
    const cards = document.querySelectorAll(".instrumentation-card");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      { threshold: 0.15 }
    );
    cards.forEach((card) => observer.observe(card));
    return () => cards.forEach((card) => observer.unobserve(card));
  }, []);

  return (
    <PageLayout pageTitle="Instrumentation Expertise">
      <main className="fixed-image-offset">
        <ProfileImage size={120} />

        <CardSection title="Instrumentation Expertise">
          <p>
            My hands-on experience spans from nanoscale fabrication to
            spectroscopy and high-resolution microscopy. Each domain integrates
            scientific precision with data-driven control and automation.
          </p>
        </CardSection>

        <section className="instrumentation-grid">
          {profile.instrumentation.map((section, index) => (
            <div key={index} className="instrumentation-card">
              <div className="instrumentation-header">
                <div className="instrumentation-icon">
                  <span>⚙️</span>
                </div>
                <h3>{section.category}</h3>
              </div>
              <p className="instrumentation-description">
                {section.description}
              </p>
              <ul className="instrumentation-techniques">
                {section.techniques.map((tech, i) => (
                  <li key={i}>{tech}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>
      </main>
    </PageLayout>
  );
};

export default Instrumentation;

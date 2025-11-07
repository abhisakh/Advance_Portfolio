import React, { useEffect } from "react";
import "../styles/timeline.css";

const CareerTimeline = ({ title, data }) => {

  // ✨ Intersection Observer for scroll animations
  useEffect(() => {
    const timer = setTimeout(() => {
      const items = document.querySelectorAll(".timeline-item");

      const observer = new IntersectionObserver(
        (entries, obs) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
              obs.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.15 }
      );

      items.forEach(item => observer.observe(item));

      return () => {
        clearTimeout(timer);
        items.forEach(item => observer.unobserve(item));
      };
    }, 150);
  }, []);

  if (!data || data.length === 0) return null;

  return (
    <section className="timeline">
      <h3>{title}</h3>
      <div className="timeline-container">
        {data.map((item, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-marker" />
            <div className="timeline-content">
              {/* Education style */}
              {item.degree && <h4>{item.degree}</h4>}
              {item.school && (
                <p className="timeline-institution">{item.school}</p>
              )}
              {/* Experience style */}
              {item.role && <h4>{item.role}</h4>}
              {item.org && (
                <p className="timeline-institution">
                  {item.org} — {item.location}
                </p>
              )}
              <p className="timeline-date">
                {item.start} – {item.end || "Present"}
              </p>
              {item.description && (
                <p className="timeline-details">{item.description}</p>
              )}
              {item.bullets && (
                <ul className="timeline-details">
                  {item.bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CareerTimeline;

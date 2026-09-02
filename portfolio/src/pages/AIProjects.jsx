import React, { useState } from "react";
import ProfileImage from "../components/ProfileImage";
import CardSection from "../components/CardSection";
import PageLayout from "../components/PageLayout";
import profile from "../data/profileData";
import "../styles/ai-projects.css";

const AIProjects = () => {
  const [search, setSearch] = useState("");

  // 🔍 Robust search across name, description, and tags
  const filteredProjects = profile.projectsdata.filter((proj) => {
    const query = search.toLowerCase();
    return (
      proj.name?.toLowerCase().includes(query) ||
      proj.description?.toLowerCase().includes(query) ||
      (Array.isArray(proj.tags) &&
        proj.tags.some((tag) => tag.toLowerCase().includes(query)))
    );
  });

  return (
    <PageLayout pageTitle="AI Projects">
      <main className="fixed-image-offset">
        <ProfileImage size={120} />

        {/* ✅ Keep title + intro inside CardSection */}
        <CardSection title="AI / Software Projects">
          <p className="ai-intro-text">
            A curated collection of my AI, data science, and full-stack software projects —
            reflecting my journey from experimental physics to data-driven intelligence and
            applied machine learning.
          </p>
        </CardSection>

        {/* ✅ Move search + grid OUTSIDE to get full width */}
        <section className="project-section">
          {/* 🔍 Search bar */}
          <div className="project-search-wrapper">
            <input
              type="text"
              placeholder="Search by project name, tag, or technology..."
              className="project-search-bar"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          {/* 🧩 Project Grid */}
          <div className="project-grid">
            {filteredProjects.length > 0 ? (
              filteredProjects.map((proj, index) => (
                <div key={index} className="project-card">
                  <div className="project-header">
                    <h3>{proj.name}</h3>
                    <span className="project-date">{proj.timeline}</span>
                  </div>

                  <p className="project-role">{proj.role}</p>
                  <p className="project-desc">{proj.description}</p>

                  {/* 🏷️ Tags */}
                  <div className="project-tags">
                    {proj.tags?.map((tag, i) => (
                      <span key={i} className="tag">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* 💡 Highlights */}
                  <ul className="project-highlights">
                    {proj.highlights?.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>

                  {/* 🧠 Tech Stack */}
                  <div className="project-tech">
                    <strong>Tech Stack:</strong>{" "}
                    {proj.techStack?.join(", ")}
                  </div>
                  {/* 🔗 GitHub Link / Project Status */}
                  {proj.github && (
                    /^(https?:\/\/|www\.)/i.test(proj.github) ? (
                      <a
                        href={proj.github.startsWith("www.") ? `https://${proj.github}` : proj.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="github-link"
                      >
                        View on GitHub →
                      </a>
                    ) : (
                      <span className="confidential-text">{proj.github}</span>
                    )
                  )}
                </div>
              ))
            ) : (
              <p className="no-results">No matching projects found.</p>
            )}
          </div>
        </section>
      </main>
    </PageLayout>
  );
};

export default AIProjects;

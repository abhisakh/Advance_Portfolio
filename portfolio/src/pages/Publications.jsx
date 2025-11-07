import React, { useState } from "react";
import profile from "../data/profileData";
import ProfileImage from "../components/ProfileImage";
import CardSection from "../components/CardSection";
import PageLayout from "../components/PageLayout";
import "../styles/publications.css";

const Publications = () => {
  const [search, setSearch] = useState("");

  // 🔍 Smarter search: title + journal + date (year) + DOI
  const filteredPubs = profile.publications.filter((pub) =>
  [pub.title, pub.journal, pub.date, pub.doi]
  .join(" ")
  .toLowerCase()
  .includes(search.toLowerCase())
  );

  return (
    <PageLayout pageTitle="Publications">
      <main className="fixed-image-offset">
        <ProfileImage size={120} />

        <CardSection title={`${profile.publicationsCount} Publications`}>
          <p>
            A collection of my peer-reviewed scientific works in
            <strong> physics, spectroscopy, nanomaterials, and AI-assisted research</strong>.
          </p>

          <input
            type="text"
            className="publication-search"
            placeholder="🔍 Search publications..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </CardSection>

        <section className="publication-grid">
          {filteredPubs.map((pub) => (
            <div key={pub.id} className="publication-card">
              <h3>{pub.title}</h3>
              <p className="journal">{pub.journal}</p>
              <p className="pub-date">{pub.date}</p>
              <a
                href={`https://doi.org/${pub.doi}`}
                target="_blank"
                rel="noreferrer"
                className="doi-link"
              >
                🔗 DOI: {pub.doi}
              </a>
            </div>
          ))}

          {filteredPubs.length === 0 && (
            <p className="no-results">No publications found for “{search}”</p>
          )}
        </section>
      </main>
    </PageLayout>
  );
};

export default Publications;

import React from "react";
import profile from "../data/profileData";
import ProfileImage from "../components/ProfileImage";
import CardSection from "../components/CardSection";
import CareerTimeline from "../components/CareerTimeline";
import PageLayout from "../components/PageLayout";

const About = () => {
  return (
    <PageLayout pageTitle="About">
      <main className="fixed-image-offset">
        {/* Profile Image */}
        <ProfileImage size={120} />

        {/* Intro */}
        <CardSection title={`About ${profile.name}`}>
          <p className="headline">{profile.headline}</p>
          <p>{profile.summary}</p>

          <p>
            <strong>Location:</strong> {profile.location} <br />
            <strong>Email:</strong>{" "}
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
          </p>

          <div className="contact-links">
            <a href={profile.links.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a href={profile.links.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a href={profile.links.orcid} target="_blank" rel="noreferrer">
              ORCID
            </a>
          </div>
        </CardSection>

        {/* Education Timeline */}
        <CareerTimeline title="Education" data={profile.education} />

        {/* Experience Timeline */}
        <CareerTimeline title="Professional Experience" data={profile.experience} />

        {/* Skills */}
        <CardSection title="Skills & Tools">
          <ul>
            <li>
              <strong>Experimental:</strong> {profile.skills.experimental.join(", ")}
            </li>
            <li>
              <strong>Programming:</strong> {profile.skills.programming.join(", ")}
            </li>
            <li>
              <strong>AI & Data:</strong> {profile.skills.ai.join(", ")}
            </li>
            <li>
              <strong>Tools:</strong> {profile.skills.tools.join(", ")}
            </li>
          </ul>
        </CardSection>

        {/* Additional Info */}
        <CardSection title="Additional Info">
          <p>
            <strong>Languages:</strong> {profile.languages.join(", ")}
          </p>
          <p>
            <strong>Publications:</strong> {profile.publicationsCount} peer-reviewed papers
          </p>
          <p>
            <strong>Interests:</strong> {profile.interests.join(", ")}
          </p>
        </CardSection>
      </main>
    </PageLayout>
  );
};

export default About;

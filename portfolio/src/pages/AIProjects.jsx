import React from 'react';
import ProfileImage from '../components/ProfileImage';
import CardSection from '../components/CardSection';
import PageLayout from '../components/PageLayout'; // 👈 IMPORT PageLayout
import '../styles/ai-projects.css'; // 👈 NEW: Import specific styles

const AIProjects = () => {
  return (
    <PageLayout pageTitle="AI Projects">
      {/* 🟢 FIX 1: Add fixed-image-offset to <main> to push content right on desktop. */}
      {/* 🟢 FIX 2: Moved ProfileImage inside <main> for structural consistency with About.jsx. */}
      <main className="fixed-image-offset">
        {/* Top Profile Image */}
        <ProfileImage size={120} />

        <CardSection title="AI / Software Projects">
          <p className="ai-intro-text">
            Here you will see my 20 AI/Software projects with descriptions, tech stack, and links.
            These projects showcase my transition from experimental physics data analysis to modern machine learning and full-stack development.
          </p>
          {/* Future Project Grid Component goes here */}
          <div className="project-grid">
            {/* ProjectCard components will be mapped here */}
          </div>
        </CardSection>
      </main>
    </PageLayout>
  );
};

export default AIProjects;
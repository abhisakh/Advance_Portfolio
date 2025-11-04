import React from 'react';
import CardSection from './CardSection';
import ProfileImage from './ProfileImage';

const Projects = () => {
  return (
    <>
      <ProfileImage size={120} />
      <CardSection title="Projects">
        Here are some of my projects where I combine physics, data, and AI to create
        innovative solutions.
      </CardSection>
    </>
  );
};

export default Projects;

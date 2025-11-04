import React from 'react';
import CardSection from '../components/CardSection';
import ProfileImage from '../components/ProfileImage';

const About = () => {
  return (
    <>
      <ProfileImage size={120} />
      <CardSection title="About Me">
        Experimental physicist with a passion for AI, data analysis, and building intelligent tools
        that solve real-world problems. I enjoy turning complex data into actionable insights.
      </CardSection>
    </>
  );
};

export default About;

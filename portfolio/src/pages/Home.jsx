import React from 'react';
import Hero from '../components/Hero';
import profilePic from '../assets/profile.jpg';

const Home = () => {
  return (
    <>
      <Hero
        name="Dr. Abhisakh Sarma"
        description="I’m an experimental physicist transitioning into AI and data-driven development.
        I love exploring the intersection of science, data, and intelligent systems —
        transforming complex data into insights and impactful tools."
        image={profilePic}   // <-- Pass the image here
      />
      {/* Optional: Add more sections below Hero if needed */}
    </>
  );
};

export default Home;

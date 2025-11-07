import React from 'react';
import Hero from '../components/Hero';
import profilePic from '../assets/profile_1.jpg';
import CardSection from '../components/CardSection';
import PageLayout from '../components/PageLayout'; // 👈 IMPORT PageLayout

const Home = () => {
  return (
    <PageLayout pageTitle="Home"> {/* 👈 USE PageLayout for consistent spacing */}
      <main>
        <Hero
          name="Dr. Abhisakh Sarma"
          description="I’m an experimental physicist transitioning into AI and data-driven development.
          I love exploring the intersection of science, data, and intelligent systems —
          transforming complex data into insights and impactful tools."
          image={profilePic}   // <-- Your existing Hero props are preserved
        />
        <CardSection /> {/* Assuming you'll have other sections */}
      </main>
    </PageLayout>
  );
};

export default Home;
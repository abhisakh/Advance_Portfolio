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
          description="I'm an experimental physicist (PhD), transitioning into software engineering,
          specializing in AI and data-driven development. I combine deep expertise in large-scale
          data processing, complex system modeling, and quantitative analysis with practical skills
          in modern development stacks. Proficient in Python, React, Node.js, and CI/CD pipelines
          from a Full-Stack program, I am actively seeking a Junior Software Engineer position
          (Fullstack, Backend, or AI) to apply my analytical strength to build robust, scalable,
          and impactful data systems."
          image={profilePic}   // <-- Your existing Hero props are preserved
        />
        {/*<CardSection /> */}{/* Assuming you'll have other sections */}
      </main>
    </PageLayout>
  );
};

export default Home;
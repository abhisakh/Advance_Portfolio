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
          description="I am an AI Engineer and QA Specialist specializing in Agentic Workflows
          and high-fidelity RAG architectures. With a PhD in Experimental Physics and 10 years
          of experience in large-scale scientific automation at DESY and European XFEL, I
          bridge the gap between complex research and production-ready software engineering.
          Having recently completed the AI Engineering track at Masterschool Berlin, I focus
          on building reliable, observable AI systems using LangGraph and FastAPI, currently
          enhancing system integrity through a dedicated QA Engineering specialization."
          image={profilePic}   // <-- Your existing Hero props are preserved
        />
        {/*<CardSection /> */}{/* Assuming you'll have other sections */}
      </main>
    </PageLayout>
  );
};

export default Home;
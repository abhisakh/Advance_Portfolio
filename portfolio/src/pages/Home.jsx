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
          description="I am an AI/ML & Software Engineer specializing in Agentic Workflows (LangGraph, MCP),
          FastAPI Microservices, and Privacy-Preserving AI Architectures.  Holding a PhD in Physics and
          bringing 10 years of analytical and systems engineering experience from DESY and EuXFEL, I bridge
          the gap between complex research and production-grade software. Currently engineering clinical ML
          pipelines and data security frameworks at Loretta Health UG, I focus on building resilient,
          observable, and high-throughput AI systems—from multi-agent orchestration and Clinical NLP
          to automated testing and cloud-native deployments."
          image={profilePic}   // <-- Your existing Hero props are preserved
        />
        {/*<CardSection /> */}{/* Assuming you'll have other sections */}
      </main>
    </PageLayout>
  );
};

export default Home;
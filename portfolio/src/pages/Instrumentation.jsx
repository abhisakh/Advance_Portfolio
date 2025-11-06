import React from 'react';
import ProfileImage from '../components/ProfileImage';
import CardSection from '../components/CardSection';
import PageLayout from '../components/PageLayout'; // 👈 IMPORT PageLayout

const Instrumentation = () => {
  return (
    <PageLayout pageTitle="Instrumentation"> {/* 👈 WRAP ENTIRE CONTENT */}
      {/* 🟢 FIX: Added fixed-image-offset class here */}
      <main className="fixed-image-offset">
        <ProfileImage size={120} />
        <CardSection title="Instrumentation / Techniques">
          This section highlights my scientific instrumentation and technical expertise.
        </CardSection>
      </main>
    </PageLayout>
  );
};

export default Instrumentation;
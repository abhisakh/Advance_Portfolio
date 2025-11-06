import React from 'react';
import ProfileImage from '../components/ProfileImage';
import CardSection from '../components/CardSection';
import PageLayout from '../components/PageLayout'; // 👈 IMPORT PageLayout

const Publications = () => {
  return (
    <PageLayout pageTitle="Publications"> {/* 👈 WRAP ENTIRE CONTENT */}
      {/* 🟢 FIX: Added fixed-image-offset class here */}
      <main className="fixed-image-offset">
        <ProfileImage size={120} />
        <CardSection title="Research Publications">
          A list of my 30 research publications, showing my scientific contributions.
        </CardSection>
      </main>
    </PageLayout>
  );
};

export default Publications;
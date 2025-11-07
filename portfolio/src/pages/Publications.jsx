import React from 'react';
import ProfileImage from '../components/ProfileImage';
import CardSection from '../components/CardSection';
import PageLayout from '../components/PageLayout';
import PublicationCard from '../components/PublicationCard'; // Component to render each publication
import profile from '../data/profileData'; // Centralized data source

const Publications = () => {
  // Get the list of publications from the imported profile data
  const publications = profile.publications;

  return (
    <PageLayout pageTitle="Publications">
      <main className="fixed-image-offset">
        <ProfileImage size={120} />
        <CardSection title="Research Publications">
          <p className="text-base mb-8 text-gray-300">
            A complete list of my **{profile.publicationsCount}** peer-reviewed research publications, highlighting my contributions across X-ray science, materials, and nanoscience.
          </p>

          {/* Grid layout for publications on desktop, stack on mobile */}
          <div className="space-y-6">
            {publications.map((pub) => (
              <PublicationCard
                key={pub.id}
                publication={pub} // Pass the individual publication object to the card
              />
            ))}
          </div>

        </CardSection>
      </main>
    </PageLayout>
  );
};

export default Publications;
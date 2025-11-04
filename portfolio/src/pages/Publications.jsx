import React from 'react';
import ProfileImage from '../components/ProfileImage';
import CardSection from '../components/CardSection';

const Publications = () => {
  return (
    <>
      <ProfileImage size={120} />
      <CardSection title="Research Publications">
        A list of my 30 research publications, showing my scientific contributions.
      </CardSection>
    </>
  );
};

export default Publications;

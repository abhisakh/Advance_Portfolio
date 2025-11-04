import React from 'react';
import CardSection from '../components/CardSection';
import ProfileImage from '../components/ProfileImage';

const Contact = () => {
  return (
    <>
      <ProfileImage size={120} />
      <CardSection title="Contact Me">
        Feel free to reach out for collaborations or inquiries about AI, data projects,
        or physics research.
      </CardSection>
    </>
  );
};

export default Contact;

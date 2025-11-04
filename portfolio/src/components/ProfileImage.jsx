import React from 'react';
import profilePic from '../assets/profile.jpg';
import '../App.css';

const ProfileImage = ({ size = 100 }) => {
  return (
    <div
      className="profile-image-top-left"
      style={{ width: size, height: size }}
    >
      <img src={profilePic} alt="Dr. Abhisakh Sarma" />
    </div>
  );
};

export default ProfileImage;

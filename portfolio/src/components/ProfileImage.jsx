import React from 'react';
import profilePic from '../assets/profile.jpg'; // <-- RE-ADDED LOCAL IMAGE IMPORT

/**
 * Renders a fixed profile image element styled to sit at the top-left.
 * Assumes styles are defined in profile.css (using .profile-image-top-left).
 */
const ProfileImage = () => {
  return (
    <div
      className="profile-image-top-left"
      // CRITICAL: Ensure image sits above everything else, especially fixed/sticky parents
      style={{ zIndex: 1001 }}
    >
      <img
        src={profilePic} // <-- USING YOUR LOCAL IMAGE FILE
        alt="Dr. Abhisakh Sarma Profile Picture"
        // Fallback for image loading failure
        onError={(e) => {
          e.target.onerror = null;
          // Using a high-contrast fallback for better visibility if loading fails
          e.target.src = "https://placehold.co/120x120/cc0000/ffffff?text=Load+Error";
          console.error("Profile image failed to load. Check profile.jpg path.");
        }}
      />
    </div>
  );
};

export default ProfileImage;
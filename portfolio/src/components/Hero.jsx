import React from 'react';
import '../App.css';
import profilePic from '../assets/profile.jpg'; // import profile image

const Hero = ({ name, role, description }) => {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1>Hi, I’m {name}</h1>
          <p>{description}</p>
        </div>
        <div className="hero-image">
          <img src={profilePic} alt={name} />
        </div>
      </div>
    </section>
  );
};

export default Hero;

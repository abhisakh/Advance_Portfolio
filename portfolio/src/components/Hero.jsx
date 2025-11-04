// Hero.jsx
import React from 'react';
import '../App.css'; // or use App.css if styles are there

const Hero = ({ name, description, image }) => {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-image">
          {image && <img src={image} alt={name} />}
        </div>
        <div className="hero-text">
          <h1>{name}</h1>
          <p>{description}</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;

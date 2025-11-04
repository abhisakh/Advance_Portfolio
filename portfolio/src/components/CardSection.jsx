import React from 'react';
import '../App.css';

const CardSection = ({ title, children }) => {
  return (
    <section className="card">
      <h2>{title}</h2>
      <p>{children}</p>
    </section>
  );
};

export default CardSection;

import React, { useState } from 'react';
import CardSection from '../components/CardSection';
import ProfileImage from '../components/ProfileImage';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // 🔧 You can integrate emailjs or your own backend API here.
    alert('Thank you! Your message has been sent successfully.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <main className="content-wrapper">
      {/* Floating Profile Image */}
      <ProfileImage size={120} />

      {/* Contact Card Section */}
      <CardSection title="Contact Me">
        <p style={{ textAlign: 'center', color: '#bbb', marginBottom: '1rem' }}>
          Have a question, collaboration idea, or just want to say hello?
          Fill out the form below or connect via my professional links.
        </p>

        {/* Contact Form */}
        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            rows="6"
            required
          />
          <button type="submit" className="contact-submit">
            Send Message
          </button>
        </form>

        {/* External Links */}
        <div className="contact-links">
          <a href="https://github.com/abhisakh" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/dr-abhisakh-sarma" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href="https://orcid.org/0000-0002-0785-8902" target="_blank" rel="noopener noreferrer">
            ORCID
          </a>
        </div>
      </CardSection>
    </main>
  );
};

export default Contact;

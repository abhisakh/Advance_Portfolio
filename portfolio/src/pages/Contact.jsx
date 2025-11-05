import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';
import CardSection from '../components/CardSection';
import ProfileImage from '../components/ProfileImage';

const Contact = () => {
  const [formData, setFormData] = useState({
    from_name: '',
    from_email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState({ loading: false, success: false, error: null });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: false, error: null });

    emailjs
      .send(
        'service_v0k7of',
        'template_zfx02eu',
        formData,
        '3FmPkk6tBfERYp_x3'
      )
      .then(
        () => {
          setStatus({ loading: false, success: true, error: null });
          setFormData({ from_name: '', from_email: '', subject: '', message: '' });

          // Hide animation after 3 seconds
          setTimeout(() => setStatus({ ...status, success: false }), 3000);
        },
        (error) => {
          console.error('EmailJS Error:', error);
          setStatus({ loading: false, success: false, error: 'Failed to send message. Please try again.' });
        }
      );
  };

  return (
    <main className="content-wrapper">
      <ProfileImage size={120} />

      <CardSection title="Contact Me">
        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="from_name"
            placeholder="Your Name"
            value={formData.from_name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="from_email"
            placeholder="Your Email"
            value={formData.from_email}
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
          <button type="submit" className="contact-submit" disabled={status.loading}>
            {status.loading ? 'Sending...' : 'Send Message'}
          </button>
        </form>

        {status.error && (
          <p style={{ color: 'tomato', marginTop: '1rem' }}>{status.error}</p>
        )}

        <div className="contact-links" style={{ marginTop: '1.5rem', display: 'flex', gap: '1rem' }}>
          <a href="https://github.com/abhisakh" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/dr-abhisakh-sarma" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://orcid.org/0000-0002-0785-8902" target="_blank" rel="noopener noreferrer">ORCID</a>
        </div>
      </CardSection>

      {/* ✅ Success Animation Overlay */}
      <AnimatePresence>
        {status.success && (
          <motion.div
            className="success-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              className="success-checkmark"
              initial={{ scale: 0 }}
              animate={{ scale: 1, rotate: 360 }}
              transition={{ type: 'spring', stiffness: 150, damping: 10 }}
            >
              ✓
            </motion.div>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Message Sent Successfully!
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
};

export default Contact;

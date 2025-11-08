import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';
import CardSection from '../components/CardSection';
import ProfileImage from '../components/ProfileImage';
import PageLayout from '../components/PageLayout';
import '../styles/contact.css';

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
      .send('service_v0k7of', 'template_zfx02eu', formData, '3FmPkk6tBfERYp_x3')
      .then(
        () => {
          setStatus({ loading: false, success: true, error: null });
          setFormData({ from_name: '', from_email: '', subject: '', message: '' });
          setTimeout(() => setStatus({ ...status, success: false }), 3000);
        },
        (error) => {
          console.error('EmailJS Error:', error);
          setStatus({
            loading: false,
            success: false,
            error: 'Failed to send message. Please try again.',
          });
        }
      );
  };

  // ✨ Animation Variants
  const containerVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut', when: 'beforeChildren', staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  return (
    <PageLayout pageTitle="Contact">
      <main className="fixed-image-offset">
        <ProfileImage size={120} />

        {/* 🪄 Animated Card Section */}
        <motion.div
          className="contact-container"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <CardSection title="Contact Me">
            <motion.form
              className="contact-form"
              onSubmit={handleSubmit}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.input
                type="text"
                name="from_name"
                placeholder="Your Name"
                value={formData.from_name}
                onChange={handleChange}
                required
                variants={itemVariants}
              />
              <motion.input
                type="email"
                name="from_email"
                placeholder="Your Email"
                value={formData.from_email}
                onChange={handleChange}
                required
                variants={itemVariants}
              />
              <motion.input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                variants={itemVariants}
              />
              <motion.textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                rows="6"
                required
                variants={itemVariants}
              />
              <motion.button
                type="submit"
                className="contact-submit"
                disabled={status.loading}
                variants={itemVariants}
              >
                {status.loading ? 'Sending...' : 'Send Message'}
              </motion.button>
            </motion.form>

            {status.error && (
              <motion.p
                className="contact-error"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
              >
                {status.error}
              </motion.p>
            )}

            <motion.div className="contact-links" variants={containerVariants}>
              <motion.a href="https://github.com/abhisakh" target="_blank" rel="noopener noreferrer" variants={itemVariants}>
                GitHub
              </motion.a>
              <motion.a href="https://www.linkedin.com/in/dr-abhisakh-sarma" target="_blank" rel="noopener noreferrer" variants={itemVariants}>
                LinkedIn
              </motion.a>
              <motion.a href="https://orcid.org/0000-0002-0785-8902" target="_blank" rel="noopener noreferrer" variants={itemVariants}>
                ORCID
              </motion.a>
            </motion.div>
          </CardSection>
        </motion.div>

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
    </PageLayout>
  );
};

export default Contact;

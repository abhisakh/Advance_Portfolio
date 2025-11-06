import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import Layout Components
import Navbar from './components/Navbar';
// NOTE: Make sure the CSS imports are here or in main.jsx
import './App.css';

// Import all Page Components
import Home from './pages/Home';
import About from './pages/About';
import AIProjects from './pages/AIProjects';
import Instrumentation from './pages/Instrumentation';
import Publications from './pages/Publications';
import Contact from './pages/Contact';


const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* FIX: Changed path from /aiprojects to /ai-projects to match the Navbar link */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/ai-projects" element={<AIProjects />} />
        <Route path="/instrumentation" element={<Instrumentation />} />
        <Route path="/publications" element={<Publications />} />
        <Route path="/contact" element={<Contact />} />

        {/* Optional: Add a 404/Catch-all route */}
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </Router>
  );
};

export default App;
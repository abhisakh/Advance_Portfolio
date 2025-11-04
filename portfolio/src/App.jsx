import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import AIProjects from './pages/AIProjects';
import Publications from './pages/Publications';
import Instrumentation from './pages/Instrumentation';
import Contact from './pages/Contact';
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/aiprojects" element={<AIProjects />} />
        <Route path="/publications" element={<Publications />} />
        <Route path="/instrumentation" element={<Instrumentation />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;

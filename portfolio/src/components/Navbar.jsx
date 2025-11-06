import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Code, BookOpen, Briefcase, Feather, MessageSquare, Microscope } from 'lucide-react';
import MobileFeature from './MobileFeature'; // Assuming this component exists

const navItems = [
  { path: '/', name: 'Home', icon: <Microscope size={18} /> },
  { path: '/about', name: 'About', icon: <BookOpen size={18} /> },
  { path: '/ai-projects', name: 'AI Projects', icon: <Code size={18} /> },
  { path: '/instrumentation', name: 'Instrumentation', icon: <Briefcase size={18} /> },
  { path: '/publications', name: 'Publications', icon: <Feather size={18} /> },
  { path: '/contact', name: 'Contact', icon: <MessageSquare size={18} /> },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const activePage = location.pathname;

  // Toggle function for the mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // FIX: This useEffect now correctly closes the menu ONLY when the URL changes (page navigation).
  useEffect(() => {
    // Scroll to top on page change
    window.scrollTo(0, 0);

    // Close menu after navigation on mobile
    if (isMenuOpen) {
        setIsMenuOpen(false);
    }
  }, [location.pathname]); // Dependency is only location.pathname (page change)

  return (
    <nav className="navbar">
      {/* 1. Logo (Always Visible) */}
      <NavLink to="/" className="logo">
        Dr. A. Sarma
      </NavLink>

      {/* 2. Mobile Menu Toggle (Visible below 768px) */}
      <button className="menu-toggle" onClick={toggleMenu} aria-label="Toggle navigation menu">
        {isMenuOpen ? <X size={30} /> : <Menu size={30} />}
      </button>

      {/* 3. Navigation Links and Feature Card Container */}
      {/* This container manages the main navigation content */}
      <div className={`menu-content-row ${isMenuOpen ? 'open' : ''}`}>

        {/* Navigation Links */}
        <ul className="nav-links">
          {navItems.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                className={({ isActive }) => `nav-link ${isActive ? 'active-link' : ''}`}
                onClick={toggleMenu} // Closes menu when a link is clicked
              >
                {item.icon}
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Mobile Feature Card (Now renders on ALL pages in the mobile dropdown) */}
        <MobileFeature />
      </div>
    </nav>
  );
};

export default Navbar;
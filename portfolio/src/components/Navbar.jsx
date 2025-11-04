import { Link, useLocation } from 'react-router-dom';
import { Home, User, Layers, FileText, Settings, Mail } from 'lucide-react';
import '../App.css';
import { useEffect, useState } from 'react';

function Navbar() {
  const location = useLocation();
  const [activePage, setActivePage] = useState('/');

  useEffect(() => {
    setActivePage(location.pathname);
  }, [location]);

  const navItems = [
    { name: 'Home', path: '/', icon: Home },
    { name: 'About', path: '/about', icon: User },
    { name: 'AI Projects', path: '/aiprojects', icon: Layers },
    { name: 'Publications', path: '/publications', icon: FileText },
    { name: 'Instrumentation', path: '/instrumentation', icon: Settings },
    { name: 'Contact', path: '/contact', icon: Mail },
  ];

  return (
    <nav className="navbar">
      <div className="logo">AI Portfolio</div>
      <ul className="nav-links">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activePage === item.path;
          return (
            <li key={item.name}>
              <Link to={item.path} className={`nav-link ${isActive ? 'active-link' : ''}`}>
                <Icon className="icon" />
                {item.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default Navbar;

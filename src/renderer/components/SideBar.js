import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <nav className="sidebar">
      <Link to="profiles">Profiles</Link>
      <Link to="lighting">Lighting Modes</Link>
      <Link to="settings">Settings</Link>
    </nav>
  );
};

export default Sidebar;

import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Link to="profiles">Profiles</Link>
      <Link to="lighting">Lighting Modes</Link>
      <Link to="settings">Settings</Link>
    </div>
  );
};

export default Sidebar;

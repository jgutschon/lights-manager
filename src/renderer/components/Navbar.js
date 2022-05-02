import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <li>
        <Link to='/profiles'>Profiles</Link>
      </li>
      <li>
        <Link to='/lightingModes'>Lighting Modes</Link>
      </li>
      <li>
        <Link to='/settings'>Settings</Link>
      </li>
    </div>
  );
};

export default Navbar;

import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const SidebarData = [
    {
      title: 'Profiles',
      path: '/profiles',
      faIcon: 'fas fa-layer-group',
    },
    {
      title: 'Lighting',
      path: '/lighting',
      faIcon: 'fas fa-lightbulb',
    },
    {
      title: 'Settings',
      path: '/settings',
      faIcon: 'fas fa-cog',
    },
  ];

  return (
    <nav className="sidebar">
      <ul className="sidebar-items">
        {SidebarData.map((item, index) => {
          return (
            <Link to={item.path} key={index} style={{ textDecoration: 'none' }}>
              <div className="sidebar-element">
                <i className={item.faIcon}></i>
                <span>{item.title}</span>
              </div>
            </Link>
          );
        })}
      </ul>
    </nav>
  );
};

export default Sidebar;

import React from 'react';
import ToggleSwitch from './components/ToggleSwitch';
import SideBar from './components/SideBar';

import './App.css';

const App = () => {
  return (
    <div className="app">
      <ToggleSwitch />
      <SideBar />
    </div>
  );
};

export default App;

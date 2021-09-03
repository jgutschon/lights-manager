import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ToggleSwitch from './components/ToggleSwitch';
import Sidebar from './components/Sidebar';

import './App.css';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Sidebar />
        <ToggleSwitch />
        <Switch>
          <Route exact path="profiles" />
          <Route exact path="lighting" />
          <Route exact path="settings" />
        </Switch>
      </div>
    </Router>
  );
};

export default App;

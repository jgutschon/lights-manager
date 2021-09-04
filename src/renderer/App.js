import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ToggleSwitch from './components/ToggleSwitch';
import Sidebar from './components/Sidebar';
import Profiles from './components/Profiles';
import Lighting from './components/Lighting';
import Settings from './components/Settings';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Sidebar />
        {/* <ToggleSwitch /> */}
        <Switch>
          <Route exact path="profiles" component={Profiles} />
          <Route exact path="lighting" component={Lighting} />
          <Route exact path="settings" component={Settings} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;

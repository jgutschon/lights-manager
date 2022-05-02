import './App.css';
import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import ToggleSwitch from './components/ToggleSwitch';

const App = () => {
  return (
    <Router>
      <div className='App'>
        <ToggleSwitch />
        <Navbar />
        <section className='container'>
          <Switch>
            {/* <Route exact path='/profiles' component={} /> */}
            <Route exact path='/lightingModes' component={LightingModes} />
          </Switch>
        </section>
      </div>
    </Router>
  );
};

export default App;

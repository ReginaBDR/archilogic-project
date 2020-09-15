import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import FloorPlan from './components/FloorPlan';
import ThreeDimensional from './components/ThreeDimensional.tsx';
import Space from './components/Space';


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/Three">
            <ThreeDimensional />
          </Route>
          <Route path="/Space">
            <Space />
          </Route>
          <Route path="/" exact>
            <FloorPlan />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

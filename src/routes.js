import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Home2 from './pages/Home2';

const Routes = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/home2" exact component={Home2} />
  </Switch>
);

export default Routes;

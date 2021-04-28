import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import News from './pages/News';
import Contacts from './pages/Contacts';
import Pedagogic from './pages/Pedagogic';
import Calendar from './pages/Calendar';

const Routes = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/news" exact component={News} />
    <Route path="/contacts" exact component={Contacts} />
    <Route path="/pedagogic" exact component={Pedagogic} />
    <Route path="/calendar" exact component={Calendar} />
  </Switch>
);

export default Routes;

import React from 'react'

import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Home from './pages/Home'
import OrphanagesMap from './pages/OrphanagesMap'

const Routes: React.FC = () => {
  return (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/map' component={OrphanagesMap} />
    </Switch>
  </BrowserRouter>
  );
};

export default Routes;

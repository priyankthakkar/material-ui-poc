import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import Header from './Header';

const App = () => (
  <div>
    <Header title="Open Movie App" />
    <Switch>
      <Route exact path="/" component={Home} />
    </Switch>
  </div>
);

export default App;

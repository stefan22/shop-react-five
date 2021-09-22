import React from 'react';
import {
  Switch,
  Route,
  BrowserRouter as Router,
} from 'react-router-dom';
//pages
import Hats from './pages/hats';
import Jackets from './pages/jackets';
import Sneakers from './pages/sneakers';
import Women from './pages/women';
import Men from './pages/men';
import HomePage from './pages/home';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop/hats" component={Hats} />
        <Route path="/shop/jackets" component={Jackets} />
        <Route path="/shop/sneakers" component={Sneakers} />
        <Route path="/shop/women" component={Women} />
        <Route path="/shop/men" component={Men} />
        <Route path="/signin" />
      </Switch>
    </Router>
  );
}

export default App;

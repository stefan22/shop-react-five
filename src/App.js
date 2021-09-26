import React from 'react';
import {
  Switch,
  Route,
  BrowserRouter as Router,
} from 'react-router-dom';

import Header from './components/header';
import HomePage from './pages/home';
import ShopPage from './pages/shop';
import SignInSignUp from './pages/signin-signup';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={ShopPage} />

        <Route exact path="/signin" component={SignInSignUp} />
      </Switch>
    </Router>
  );
}

export default App;

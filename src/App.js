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
import { ROUTES } from './helpers/constants/routes'

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path={ROUTES.home} component={HomePage} />
        <Route exact path={ROUTES.shop} component={ShopPage} />

        <Route
          exact
          path={ROUTES.signin}
          component={SignInSignUp}
        />
      </Switch>
    </Router>
  );
}

export default App;

import React from 'react';
import {
  Switch,
  Route,
  BrowserRouter as Router,
} from 'react-router-dom';

//comps
import Header from './components/header';
import HomePage from './pages/home';
import ShopPage from './pages/shop';
import Signin from './pages/signin';
import Signup from './pages/signup';
//consts
import * as ROUTES from './helpers/constants/routes';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route
          exact
          path={ROUTES.HOME}
          component={HomePage}
        />
        <Route
          exact
          path={ROUTES.SHOP}
          component={ShopPage}
        />

        <Route
          exact
          path={ROUTES.SIGNIN}
          component={Signin}
        />
        <Route
          exact
          path={ROUTES.SIGNUP}
          component={Signup}
        />
      </Switch>
    </Router>
  );
}

export default App;

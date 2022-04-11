import React from 'react';
import {
  Routes,
  Route,
} from 'react-router-dom';

import { AnimatePresence } from 'framer-motion';
import { withAuthentication } from './components/session';

//comps
import Header from './components/header';
import HomePage from './pages/home';
import ShopPage from './pages/shop';
import Signin from './pages/signin';
import Signup from './pages/signup';
//consts
import * as ROUTES from './helpers/constants/routes';

const App = () => (
      <>
        <Header />
        <AnimatePresence exitBeforeEnter>
          <Routes>
            <Route
              exact
              path={ROUTES.HOME}
              element={<HomePage />}
            />
            <Route
              exact
              path={ROUTES.SHOP}
              element={<ShopPage />}
            />

            <Route
              exact
              path={ROUTES.SIGNIN}
              element={<Signin />}
            />

            <Route
              exact
              path={ROUTES.SIGNUP}
              element={<Signup />}
            />
          </Routes>
        </AnimatePresence>
      </>
);

export default withAuthentication(App);

import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Hats from './pages/categories/hats'
//comps
import Navigation from './components/navigation'
import HomePage from './pages/home'
import ShopPage from './pages/shop'
import Signin from './pages/signin'
import Signup from './pages/signup'
//consts
import * as ROUTES from './helpers/constants/routes'

const App = () => (
  <>
    <Navigation />
    <AnimatePresence exitBeforeEnter>
      <Routes>
        <Route
          index
          element={<HomePage />}
        />

        <Route
          exact
          path={ROUTES.SHOP}
          element={<ShopPage />}>
          <Route
            exact
            path={ROUTES.SHOP}
            element={<Hats />}
          />
        </Route>

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
)

export default App

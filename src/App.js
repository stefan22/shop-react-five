import React, { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { signInCurrentUser } from './redux-store/user/userActions'
import {
  createUserDocumentFromAuth,
  onAuthStateChangedListener,
} from './firebase/firebase'
import { AnimatePresence } from 'framer-motion'
//comps
import Category from './pages/category'
import ProductsShowroom from './components/products-bycategories'
import Navigation from './components/navigation'
import HomePage from './pages/home'
import ShopPage from './pages/shop'
import Signin from './pages/signin'
import Signup from './pages/signup'
import Account from './pages/account'
//consts
import * as ROUTES from './helpers/constants/routes'

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener(user => {
      if (user) {
        createUserDocumentFromAuth(user).then(res => {
          dispatch(signInCurrentUser(res.firestore._authCredentials))
        })
      }
    })
    return unsubscribe
  }, [dispatch])

  return (
    <>
      <Navigation />
      <AnimatePresence exitBeforeEnter>
        <Routes>
          <Route
            index
            element={<HomePage />}
          />
          <Route
            path={ROUTES.HOME}
            element={<HomePage />}
          />

          <Route
            exact
            path={ROUTES.SHOP}
            element={<ShopPage />}
          >
            <Route
              path={ROUTES.CATEGORIES}
              element={<ProductsShowroom />}
            />
          </Route>

          <Route
            path={ROUTES.CATEGORY}
            element={<Category />}
          />

          <Route
            exact
            path={ROUTES.ACCOUNT}
            element={<Account />}
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
  )
}

export default App

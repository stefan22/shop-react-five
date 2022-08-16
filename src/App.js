import React, { useEffect, Suspense, lazy } from 'react'
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
import Signin from './pages/signin'
import Loading from './components/loading'
//consts
import * as ROUTES from './helpers/constants/routes'
//lazy loading
const ShopPage = lazy(() => import('./pages/shop'))
const Signup = lazy(() => import('./pages/signup'))
const Account = lazy(() => import('./pages/account'))

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
    <Suspense fallback={<Loading />}>
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
    </Suspense>
  )
}

export default App

import React, { useEffect } from 'react'
import { Routes, Route, Outlet } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { setCurrentUser } from './redux-store/user/userActions'
import {
  createUserDocumentFromAuth,
  onAuthStateChangedListener,
} from './firebase/firebase'
import { AnimatePresence } from 'framer-motion'

//comps
import Layout from './pages/layout'
import Category from './pages/category'
import Categories from './pages/categories'
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
  const categories = useSelector(state => state.categories)

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener(user => {
      if (user) {
        createUserDocumentFromAuth(user).then(res => {
          dispatch(setCurrentUser(res.firestore._authCredentials))
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

          <Route element={<Layout />}>
            <Route
              exact
              path={ROUTES.SHOP}
              element={<ShopPage />}
            >
              <Route
                path={ROUTES.CATEGORIES}
                element={<Categories  />}
              >
                <Route
                  path={ROUTES.CATEGORY}
                  element={<Category />}
                />
              </Route>
            </Route>
          </Route>

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

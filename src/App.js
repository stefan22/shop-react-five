import React, { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setCurrentUser } from './redux-store/user/userActions'
import {
  createUserDocumentFromAuth,
  onAuthStateChangedListener,
} from './firebase/firebase'
import { AnimatePresence } from 'framer-motion'
import Hats from './pages/categories'
//comps
import Navigation from './components/navigation'
import HomePage from './pages/home'
import ShopPage from './pages/shop'
import Signin from './pages/signin'
import Signup from './pages/signup'
//consts
import * as ROUTES from './helpers/constants/routes'
import Categories from './pages/categories'
import UsersPage from './pages/categories/UsersPage'
import UserPage from './pages/categories/UserPage'


const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener(user => {
      if (user) {
        createUserDocumentFromAuth(user)
      }
      dispatch(setCurrentUser(user))
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
            exact
            path={ROUTES.SHOP}
            element={<ShopPage />}>

            <Route

              path={ROUTES.CATEGORIES}
              element={<Categories />}
            />

          </Route>

          <Route
            exact
            path={'/users'}
            element={<UsersPage />}
          />

          <Route
            exact
            path={'/user/:userId'}
            element={<UsersPage />}
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
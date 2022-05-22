import React, { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setCurrentUser } from './redux-store/user/userActions'
import {
  createUserDocumentFromAuth,
  onAuthStateChangedListener,
  getCategoriesAndDocuments,
} from './firebase/firebase'
import { AnimatePresence } from 'framer-motion'

//comps
import Navigation from './components/navigation'
import HomePage from './pages/home'
import ShopPage from './pages/shop'
import Signin from './pages/signin'
import Signup from './pages/signup'
import Account from './pages/account'
//consts
import * as ROUTES from './helpers/constants/routes'
import Categories from './pages/categories'
import Category from './pages/category';




const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    const getCategories = async () => {
      return await getCategoriesAndDocuments();
    }
    getCategories().then(response => response)

    return () => getCategories
    },[])



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
                exact
                path={ROUTES.CATEGORIES}
                element={<Categories />}
              >
                  <Route
                    exact
                    path={ROUTES.CATEGORY}
                    element={<Category />}
                  />

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
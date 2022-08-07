import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import { useDispatch } from 'react-redux'
import { Outlet } from 'react-router-dom'
import ProductsDirectory from '../../components/products-directory'
import { fetchCategories } from '../../redux-store/categories/categoriesActions'
import { getCategoriesAndDocuments } from '../../firebase/firebase'

import './styles.home.scss'

const HomePage = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    let allCategories = getCategoriesAndDocuments()
    allCategories.then(res => {
      dispatch(fetchCategories(res))
    })
  }, [dispatch])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className="home-wrapper"
    >
      <h1>We're loaded! Browse our huge inventory!</h1>
      <ProductsDirectory />
      <Outlet />
    </motion.div>
  )
}

export default HomePage

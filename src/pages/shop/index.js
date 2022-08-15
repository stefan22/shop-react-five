import React from 'react'
import { useSelector } from 'react-redux'
import ProductsShowroom from '../../components/products-bycategories'
import { motion } from 'framer-motion'
import Loading from '../../components/loading'
import './styles.scss'

const ShopPage = () => {
  const { products, loading } = useSelector(state => state.products)

  function groupBy(arr, property) {
    return arr.reduce((acc, cur) => {
      acc[cur[property]] = [...(acc[cur[property]] || []), cur]
      return acc
    }, {})
  }

  let catgroups = groupBy(products, 'cat')
  const productsCategories = Object.keys(catgroups)

  if (loading) {
    return <Loading />
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className="shop-page"
    >
      {!loading &&
        productsCategories?.map(itm => (
          <ProductsShowroom
            key={itm}
            title={itm}
            products={catgroups}
          />
        ))}
    </motion.div>
  )
}

export default ShopPage

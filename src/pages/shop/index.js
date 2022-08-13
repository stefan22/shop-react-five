import React from 'react'
import { useSelector } from 'react-redux'
import ProductsShowroom from '../../components/products-bycategories'
import { motion } from 'framer-motion'
import './styles.scss'

const ShopPage = () => {
  const products = useSelector(state => state.products).products

  function groupBy(arr, property) {
    return arr.reduce((acc, cur) => {
      acc[cur[property]] = [...(acc[cur[property]] || []), cur]
      return acc
    }, {})
  }

  let catgroups = groupBy(products, 'cat')
  const productsCategories = Object.keys(catgroups)

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className="shop-page"
    >
      {productsCategories.map(itm => (
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

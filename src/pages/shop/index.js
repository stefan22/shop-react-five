import React from 'react'
import ProductsShowroom from '../../components/products-bycategories'
import { motion } from 'framer-motion'
import { PRODUCTS_DATA } from '../../helpers/products.data'
import './styles.scss'

const ShopPage = () => {
  let products = PRODUCTS_DATA // need to pass this data to firestore db
  const productsCategories = Object.keys(products)

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
          products={products}
        />
      ))}
    </motion.div>
  )
}

export default ShopPage

import React, { useContext } from 'react'
import { ProductsContext } from '../../contexts/products.context'
import ProductsShowroom from '../../components/products-bycategories'
import { motion } from 'framer-motion'
import './styles.scss'

const ShopPage = () => {
  let products = useContext(ProductsContext)
  const { products: productsObj } = products
  const categories = Object.keys(productsObj)
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className="shop-page">
      {categories.map((itm, idx) => (
        <ProductsShowroom
          key={idx}
          title={itm}
          products={products}
          categories={categories}
        />
      ))}
    </motion.div>
  )
}

export default ShopPage
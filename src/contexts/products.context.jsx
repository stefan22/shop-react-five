import React, { createContext, useState } from 'react'

import { PRODUCTS_DATA } from '../helpers/products.data'

export const ProductsContext = createContext({
  products: [],
})

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState(PRODUCTS_DATA);
  const value = { products }

  return <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>
}
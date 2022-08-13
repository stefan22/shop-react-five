import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import ProductDetails from '../../components/product-details'

const Category = () => {
  const { category, product } = useParams()
  const [sele, setSele] = useState(null)
  const matchProduct = useSelector(state => state.products).products

  useEffect(() => {
    const getProduct = () => {
      return matchProduct?.map(itm => {
        if (itm.cat === category && itm.name === product) {
          setSele(itm)
        }
      })
    }
    getProduct()
  }, [category, matchProduct, product])

  return (
    <>
      {sele && (
        <ProductDetails
          name={sele.name}
          price={sele.price}
          cat={sele.cat}
          imageUrl={sele.imageUrl}
        />
      )}
    </>
  )
}

export default Category

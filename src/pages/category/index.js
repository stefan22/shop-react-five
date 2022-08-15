import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import ProductDetails from '../../components/product-details'
import Loading from '../../components/loading'

const Category = () => {
  const { category, product } = useParams()
  const [sele, setSele] = useState(null)
  const { loading, products: allProducts } = useSelector(
    state => state.products
  )

  useEffect(() => {
    let selectedProduct = allProducts?.find(
      itm => itm.cat === category && itm.name === product
    )
    setSele(selectedProduct)
  }, [category, product])

  if (loading) {
    return <Loading />
  }

  return (
    <>
      {!loading && (
        <ProductDetails
          name={sele?.name}
          price={sele?.price}
          cat={sele?.cat}
          imageUrl={sele?.imageUrl}
        />
      )}
    </>
  )
}

export default Category

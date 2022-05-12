import React from 'react'
import ProductPreview from '../product-preview'
import './styles.scss'

const ProductsShowroom = ({ title, products }) => {
  return (
    <div className="products-showroom">
      <h1 className="products-showroom__title">{title}</h1>
      <div className="products-showroom__row">
        {products[title].map(itm => (
          <ProductPreview
            key={itm.id}
            name={itm.name}
            imageUrl={itm.imageUrl}
            price={itm.price}
            cat={itm.cat}
          />
        ))}
      </div>
    </div>
  )
}

export default ProductsShowroom

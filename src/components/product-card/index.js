import React from 'react'
import CartButton from '../cart-button'
import './styles.scss'

const ProductCard = ({ id, name, price, imageUrl, title }) => (
  <div
    key={id}
    className="product-card">
    <div className="image-card">
      <img
        src={imageUrl}
        alt={name}
        width={title === 'Hats' || title === 'Women' || title === 'Men' ? 381 : 382}
        height="auto"
      />
    </div>
    <CartButton />
    <div className="product-footer">
      <section className="product-footer__top">
        <span className="product-name">{name}</span>
        <span className="product-price">{price}</span>
      </section>
      <section className="product-footer__bottom"></section>
    </div>
  </div>
)

export default ProductCard
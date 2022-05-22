import React from 'react'
import {Link } from 'react-router-dom'
import CartButton from '../cart-button'
import './styles.scss'

const ProductCard = ({ id, name, price,cat, imageUrl, title }) => (
  <div
    key={id}
    data-category={cat}
    data-name={name}
    data-price={price}
    className="product-card">
    <Link to={`/shop/${cat}/${name}`}>
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
    </Link>
  </div>
)

export default ProductCard
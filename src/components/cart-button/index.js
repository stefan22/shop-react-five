import React from 'react'
import './cartButton.scss'
import { ReactComponent as Cart } from '../../assets/images/shopping-bag.svg'

const CartButton = ({ ...otherProps }) => (
  <div className="cart-button__wrapper">
    <button
      className="cart-button"
      {...otherProps}
    >
      <Cart />
      <span>ADD TO CART</span>
      <span className="cart-count">{0}</span>
    </button>
  </div>
)

export default CartButton

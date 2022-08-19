import React, { useRef, useEffect, useCallback, memo } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from '../../gsap/gsap-core'
import { CSSPlugin } from '../../gsap/CSSPlugin'
gsap.registerPlugin(CSSPlugin)
import CartButton from '../cart-button'
import './styles.scss'

const ProductCard = memo(
  ({ id, name: productName, price, cat: category, imageUrl }) => {
    let shopro = useRef(null)

    const cardEntry = useCallback(() => {
      let tx = gsap.timeline()
      tx.from(shopro, 1.25, {
        delay: 1,
        autoAlpha: 0,
        opacity: 0,
        x: 0,
        zIndex: -10,
        ease: 'ease',
      })

      tx.play()
    }, [shopro])

    useEffect(() => {
      cardEntry()

      return () => cardEntry
    }, [cardEntry])

    return (
      <div
        key={id}
        data-test="shop-pg__product-card"
        data-category={category}
        data-name={productName}
        data-price={price}
        className="product-card"
      >
        <Link to={`/shop/${category}/${productName}`}>
          <div className="image-card">
            <img
              src={imageUrl}
              alt={name}
              width={382}
              height="auto"
            />
          </div>
          <CartButton />
          <div className="product-footer">
            <section
              ref={ele => (shopro = ele)}
              className="product-footer__top"
            >
              <span className="product-name">{name}</span>
              <span className="product-price">{price}</span>
            </section>
            <section className="product-footer__bottom"></section>
          </div>
        </Link>
      </div>
    )
  }
)

export default ProductCard

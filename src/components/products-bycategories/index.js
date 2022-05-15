import React, { useEffect, useRef } from 'react'
import ProductCard from '../product-card'
import './shop-page.scss'
import { gsap } from '../../gsap/gsap-core'
import { CSSPlugin } from '../../gsap/CSSPlugin'

gsap.registerPlugin(CSSPlugin)

const ProductsShowroom = ({ title, products: { products } }) => {
  let tm = gsap.timeline()
  let shoref = useRef(null)

  const doShowEntry = () => {
    tm.from(shoref, 1.15, {
      autoAlpha: 0,
      y: 0,
      stagger: {
        grid: 'auto',
        each: 0.25,
      },
      ease: 'back.inOut',
    })
  }

  useEffect(() => {
    doShowEntry()
  }, [])

  return (
    <div className="shop-show">
      <h1 className="shop-show__title">{title}</h1>
      <div
        ref={ele => (shoref = ele)}
        className="shop-show__row">
        {products[title].map(itm => (
          <ProductCard
            key={itm.id}
            title={title}
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
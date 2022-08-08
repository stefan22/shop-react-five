import React, { useEffect, useCallback, useRef, useState } from 'react'
import { useParams } from 'react-router-dom'
import ProductCard from '../product-card'
import './shop-page.scss'
import { gsap } from '../../gsap/gsap-core'
import { CSSPlugin } from '../../gsap/CSSPlugin'

gsap.registerPlugin(CSSPlugin)

const ProductsShowroom = ({ title, products }) => {
  const { categories: isCategory } = useParams()
  const [cats, setCats] = useState([])

  useEffect(() => {
    let isMatch = isCategory === title.toLowerCase() ? isCategory : false
    if (isMatch) {
      setCats(products[title])
    } else if (isCategory === undefined) {
      setCats(products[title])
    }
  }, [isCategory, products, title])

  let shoref = useRef(null)

  const doShowEntry = useCallback(() => {
    let tm = gsap.timeline()
    tm.from(shoref, 1.15, {
      autoAlpha: 0,
      y: 0,
      stagger: {
        grid: 'auto',
        each: 0.25,
      },
      ease: 'back.inOut',
    })
  }, [])

  useEffect(() => {
    doShowEntry()
  }, [doShowEntry])

  return (
    <div className="shop-show">
      {isCategory === title.toLowerCase() && ( //selected from: /
        <h1 className="shop-show__title">{title}</h1>
      )}

      {isCategory === undefined && ( //selected from: /shop
        <h1 className="shop-show__title">{title}</h1>
      )}

      <div
        ref={ele => (shoref = ele)}
        className="shop-show__row"
      >
        {
          //products in a category
          cats.map(itm => (
            <ProductCard
              key={itm.id}
              title={title}
              name={itm.name}
              imageUrl={itm.imageUrl}
              price={itm.price}
              cat={itm.cat}
            />
          ))
        }
      </div>
    </div>
  )
}

export default ProductsShowroom

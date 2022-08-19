import React, { useEffect, useCallback, useRef, useState, memo } from 'react'
import { motion } from 'framer-motion'
import { useParams } from 'react-router-dom'
import ProductCard from '../product-card'
import './shop-page.scss'
import { gsap } from '../../gsap/gsap-core'
import { CSSPlugin } from '../../gsap/CSSPlugin'
gsap.registerPlugin(CSSPlugin)

const ProductsShowroom = memo(({ title, products }) => {
  const { category: isCategory } = useParams()
  const [cats, setCats] = useState([])

  useEffect(() => {
    const getCatProducts = () => {
      if (isCategory) {
        let catProducts = products[isCategory].filter(itm => itm)
        setCats(catProducts)
      }
    }
    let productsCategories = getCatProducts()
  }, [isCategory, products, setCats])

  let shoref = useRef(null)
  let shoheader = useRef(null)

  const doShowEntry = useCallback(() => {
    let grid = [7, 15]
    let tm = gsap.timeline()
    let th = gsap.timeline()

    th.from(
      shoheader,
      0.5,
      {
        delay: 0,
        autoAlpha: 0,
        x: -200,
        opacity: 0,
        ease: 'ease.easeIn',
      },
      '+=.3'
    )

    tm.from(
      shoref,
      1.1,
      {
        autoAlpha: 0,
        y: -10,
        x: 20,
        scaleX: 0.1,
        xPercent: 0,
        yoyo: true,
        rotateX: -45,
        stagger: {
          each: 0.15,
          amount: grid,
          axis: 'both',
          from: 'center',
          ease: 'ease',
        },
        ease: 'power3.inOut',
      },
      '+=.1'
    )
    th.play()
    tm.play()
  }, [shoref, shoheader])

  useEffect(() => {
    doShowEntry()
    return () => doShowEntry
  }, [doShowEntry])

  const getUp = val => val.charAt(0).toUpperCase() + val.slice(1, val.length)

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <div
        data-test="shop-pg__category"
        className="shop-show"
      >
        <header
          ref={ele => (shoheader = ele)}
          className="shop-show__header"
        >
          {isCategory === title && (
            <h1 className="shop-show__title">{getUp(isCategory)}</h1>
          )}
        </header>
        {!isCategory && <h1 className="shop-show__title">{getUp(title)}</h1>}
        <div
          ref={ele => (shoref = ele)}
          className="shop-show__row"
        >
          {isCategory === title &&
            cats.map((itm, idx) => (
              <ProductCard
                key={idx}
                id={itm.name}
                name={itm.name}
                imageUrl={itm.imageUrl}
                price={itm.price}
                cat={itm.cat}
              />
            ))}

          {!isCategory &&
            products[title].map((itm, idx) => (
              <ProductCard
                key={idx}
                id={itm.name}
                title={title}
                name={itm.name}
                imageUrl={itm.imageUrl}
                price={itm.price}
                cat={itm.cat}
              />
            ))}
        </div>
      </div>
    </motion.div>
  )
})

export default ProductsShowroom

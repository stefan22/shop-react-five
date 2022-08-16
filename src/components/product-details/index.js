import React, { useEffect, useCallback, memo, useRef } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { gsap } from '../../gsap/gsap-core'
import { CSSPlugin } from '../../gsap/CSSPlugin'
gsap.registerPlugin(CSSPlugin)
import CustomButton from '../custom-button'
import styles from './product-details.module.css'

const ProductDetails = memo(({ name, price, imageUrl }) => {
  let proRef = useRef(null)

  const productShow = useCallback(() => {
    let tl = gsap.timeline()
    tl.from(
      proRef,
      1,
      {
        scale: 0,
        opacity: 0,
        autoAlpha: 0,
        y: 60,
        yoyo: true,
        ease: 'power2.inOut',
        stagger: {
          grid: [7, 15],
          axis: 'both',
          ease: 'none',
          from: 'center',
        },
      },
      '-= .5'
    )

    tl.play()
  }, [proRef])

  useEffect(() => {
    productShow()

    return () => productShow
  }, [productShow])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.5 }}
    >
      <div className={styles.productWrap}>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div
                ref={ele => (proRef = ele)}
                className="product-card"
              >
                <div className="image-card">
                  <img
                    className={styles.productImage}
                    src={imageUrl}
                    alt={name}
                    width={433}
                    height="auto"
                  />
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <section className="productHeading">
                <h2 className="productName">{name}</h2>
                <h3 className="productPrice">£{price}</h3>
              </section>
              <hr />

              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <div className="row">
                <div className={styles.productInputs}>
                  <div className="col-md-6">
                    <label htmlFor="product-size">Size</label>
                    <select
                      id="product-size"
                      name="product-size"
                      className="form-control"
                    >
                      <option>S</option>
                      <option>M</option>
                      <option>L</option>
                      <option>XL</option>
                    </select>
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="product-color">Color</label>
                    <select
                      id="product-color"
                      name="product-color"
                      className="form-control"
                    >
                      <option>Blue</option>
                      <option>Green</option>
                      <option>Red</option>
                    </select>
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="product-qty">Quantity</label>
                    <select
                      id="product-qty"
                      name="product-qty"
                      className="form-control"
                    >
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className={styles.productCount}>
                <Link
                  to={'/'}
                  className={styles.addcartBtn}
                >
                  <CustomButton>Add to Cart</CustomButton>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
})

export default ProductDetails

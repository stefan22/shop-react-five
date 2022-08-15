import React from 'react'
import { Link } from 'react-router-dom'
import './styles.scss'

const CategoryButton = ({ name, imageUrl, size, linkUrl }) => {
  return (
    <button
        data-test="home-pg-category"
      style={{
        backgroundImage: `url(../images/categories/${imageUrl}.jpg)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
      className={`product-category__item ${!size ? 'regular' : size}`}
    >
      <Link to={`/${linkUrl}`}>
        <div className="category-item">
          <h1
              data-test="home-pg-category-name"
              className="category-item__title">{name}</h1>
          <span className="category-item__subtitle">SHOP NOW</span>
        </div>
      </Link>
    </button>
  )
}

export default CategoryButton

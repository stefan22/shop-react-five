import React from 'react'
import CategoryButton from '../category-button'
//helpers
import { CATEGORIES_DATA } from '../../helpers/categories.data'
import styles from './catbuttons.module.css'

const ProductsDirectory = () => {
  const categoriesData = CATEGORIES_DATA

  return (
    <div className={styles._wrapper}>
      {categoriesData.map(category => (
        <CategoryButton
          key={category.id}
          {...category}
        />
      ))}
    </div>
  )
}

export default ProductsDirectory
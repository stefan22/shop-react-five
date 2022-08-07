import React from 'react'
import { useSelector } from 'react-redux'
import CategoryButton from '../category-button'
import styles from './catbuttons.module.css'

const ProductsDirectory = () => {
  let categoriesData = useSelector(state => state.categories.categories)

  return (
    <div className={styles._wrapper}>
      {categoriesData?.map(category => (
        <CategoryButton
          key={category.name}
          {...category}
        />
      ))}
    </div>
  )
}

export default ProductsDirectory

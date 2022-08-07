import React from 'react'
import { useSelector } from 'react-redux'
import CategoryButton from '../category-button'
//helpers
import { CATEGORIES_DATA } from '../../helpers/categories.data'
import styles from './catbuttons.module.css'

const ProductsDirectory = () => {
  const categoriesData1 = CATEGORIES_DATA
  let categoriesData = useSelector(state => state.categories.categories)
  if (categoriesData) {
    console.log('\n\n data fire \n\n', categoriesData)
  }
  console.log('data local ', categoriesData1)

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

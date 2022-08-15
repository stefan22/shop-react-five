import React, { memo } from 'react'
import { useSelector } from 'react-redux'
import CategoryButton from '../category-button'
import Loading from '../loading'
import styles from './catbuttons.module.css'

const ProductsDirectory = memo(() => {
  let { categories, loading } = useSelector(state => state.categories)

  if (loading) {
    return <Loading />
  }
  return (
    <div className={styles._wrapper}>
      {!loading &&
        categories?.map(category => (
          <CategoryButton
            key={category.name}
            {...category}
          />
        ))}
    </div>
  )
})

export default ProductsDirectory

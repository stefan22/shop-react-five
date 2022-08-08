/* eslint-disable */
import React from 'react'
import { useLocation, useParams } from 'react-router-dom'

const Category = () => {
  const location = useLocation()
  const category = useParams()
  console.log(' location ', location)
  console.log('product in category page ', category)

  return (
    <div>
      <h1>Category</h1>
      category: {category}, location: {location}
    </div>
  )
}

export default Category

import React from 'react'
import { useLocation, useParams, Link } from 'react-router-dom'

const Category = () => {
  let category = useParams()
  let path = useLocation()

  return (
    <div>
      <h1>Category</h1>
      category: {category}, path: {path}
    </div>
  )
}

export default Category

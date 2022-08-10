/* eslint-disable */
import React from 'react'
import { useLocation, useParams } from 'react-router-dom'

const Categories = () => {
  const location = useLocation()
  const categories = useParams()
  console.log(' location ', location)
  console.log('categories in categories ', categories)

  return <p>Categories page</p>
}

export default Categories

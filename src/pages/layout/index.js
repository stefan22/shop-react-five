/* eslint-disable */
/**
 *  this page ongoing along with categories
 */
import React from 'react'
import { useParams, useLocation } from 'react-router-dom'
import { Outlet } from 'react-router-dom'
// import ProductCard from "../../components/product-card";

const Layout = () => {
  const location = useLocation()
  const category = useParams()
  console.log(' location ', location)
  console.log('product in layout ', category)

  return (
    <main>
      <Outlet {...location} />
    </main>
  )
}

export default Layout

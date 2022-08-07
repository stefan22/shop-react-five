import PRODUCTS_ACTIONS_TYPE from './productsTypes'
import { createAction } from '../../helpers/redux/createAction'

export const setProducts = products =>
  createAction(PRODUCTS_ACTIONS_TYPE.SET_PRODUCTS, products)

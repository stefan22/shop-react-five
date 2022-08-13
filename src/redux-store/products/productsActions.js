import PRODUCTS_ACTIONS_TYPES from './productsTypes'
import { createAction } from '../../helpers/redux/createAction'

export const fetchProducts = productsArray =>
  createAction(PRODUCTS_ACTIONS_TYPES.FETCH_PRODUCTS, productsArray)

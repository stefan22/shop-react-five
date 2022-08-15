import PRODUCTS_ACTIONS_TYPES from './productsTypes'
import { createAction } from '../../helpers/redux/createAction'
import { getProductsAndDocuments } from '../../firebase/firebase'

const { SET_PRODUCTS_START, SET_PRODUCTS_SUCCESS, SET_PRODUCTS_FAILURE } =
  PRODUCTS_ACTIONS_TYPES

export const fetchProductsStart = () => createAction(SET_PRODUCTS_START)

export const fetchProductsSuccess = productsArray =>
  createAction(SET_PRODUCTS_SUCCESS, productsArray)

export const fetchProductsFailed = error =>
  createAction(SET_PRODUCTS_FAILURE, error)

export const fetchProductsAsync = () => async dispatch => {
  dispatch(fetchProductsStart())
  try {
    const allProducts = await getProductsAndDocuments()
    dispatch(fetchProductsSuccess(allProducts))
  } catch (error) {
    dispatch(fetchProductsFailed(error))
  }
}

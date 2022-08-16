import CATEGORIES_ACTIONS_TYPES from './categoriesTypes'
import { createAction } from '../../helpers/redux/createAction'
import { getCategoriesAndDocuments } from '../../firebase/firebase'

// types
const { SET_CATEGORIES_START, SET_CATEGORIES_SUCCESS, SET_CATEGORIES_FAILURE } =
  CATEGORIES_ACTIONS_TYPES

// actions
export const fetchCategoriesStart = () => createAction(SET_CATEGORIES_START)

export const fetchCategoriesSuccess = categoriesArray =>
  createAction(SET_CATEGORIES_SUCCESS, categoriesArray)

export const fetchCategoriesFailed = error =>
  createAction(SET_CATEGORIES_FAILURE, error)

// thunks
export const fetchCategoriesAsync = () => async dispatch => {
  dispatch(fetchCategoriesStart())
  try {
    const categoriesArray = await getCategoriesAndDocuments()
    dispatch(fetchCategoriesSuccess(categoriesArray))
  } catch (error) {
    dispatch(fetchCategoriesFailed(error))
  }
}

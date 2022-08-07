import CATEGORIES_ACTIONS_TYPES from './categoriesTypes'
import { createAction } from '../../helpers/redux/createAction'

export const fetchCategories = categoriesArray =>
  createAction(CATEGORIES_ACTIONS_TYPES.FETCH_CATEGORIES, categoriesArray)

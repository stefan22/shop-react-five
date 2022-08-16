import CATEGORIES_ACTIONS_TYPES from './categoriesTypes'

const INITIAL_STATE = {
  categories: [],
  loading: true,
  error: null,
}

const categoriesReducer = (state = INITIAL_STATE, action = {}) => {
  const { type, payload } = action
  const {
    SET_CATEGORIES_START,
    SET_CATEGORIES_FAILURE,
    SET_CATEGORIES_SUCCESS,
  } = CATEGORIES_ACTIONS_TYPES

  switch (type) {
    case SET_CATEGORIES_START:
      return {
        ...state,
        loading: true,
        error: null,
      }
    case SET_CATEGORIES_SUCCESS:
      return {
        ...state,
        categories: payload,
        loading: false,
        error: null,
      }
    case SET_CATEGORIES_FAILURE:
      return {
        ...state,
        error: payload,
        loading: false,
      }
    default:
      return state
  }
}

export default categoriesReducer

import CATEGORIES_ACTIONS_TYPES from './categoriesTypes'

const CATEGORIES_INITIAL_STATE = {
  categories: [],
}

const categoriesReducer = (state = CATEGORIES_INITIAL_STATE, action = {}) => {
  const { type, payload } = action
  const { FETCH_CATEGORIES } = CATEGORIES_ACTIONS_TYPES
  switch (type) {
    case FETCH_CATEGORIES:
      return {
        ...state,
        categories: payload,
      }
    default:
      return state
  }
}

export default categoriesReducer

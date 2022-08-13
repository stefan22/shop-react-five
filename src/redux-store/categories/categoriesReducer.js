import CATEGORIES_ACTIONS_TYPES from './categoriesTypes'

const INITIAL_STATE = {
  categories: [],
}

const categoriesReducer = (state = INITIAL_STATE, action = {}) => {
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

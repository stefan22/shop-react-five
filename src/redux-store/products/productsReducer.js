import PRODUCTS_ACTIONS_TYPES from './productsTypes'

const INITIAL_STATE = {
  products: [],
}

const productsReducer = (state = INITIAL_STATE, action = {}) => {
  const { type, payload } = action
  const { FETCH_PRODUCTS } = PRODUCTS_ACTIONS_TYPES
  switch (type) {
    case FETCH_PRODUCTS:
      return {
        ...state,
        products: payload,
      }
    default:
      return state
  }
}

export default productsReducer

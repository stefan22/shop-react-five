import PRODUCTS_ACTIONS_TYPE from './productsTypes'

const PRODUCTS_INITIAL_STATE = {
  products: [],
}

const productsReducer = (state = PRODUCTS_INITIAL_STATE, action = {}) => {
  const { type, payload } = action
  const { SET_PRODUCTS } = PRODUCTS_ACTIONS_TYPE
  switch (type) {
    case SET_PRODUCTS:
      return {
        ...state,
        products: payload,
      }
    default:
      return state
  }
}

export default productsReducer

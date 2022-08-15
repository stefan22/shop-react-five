import PRODUCTS_ACTIONS_TYPES from './productsTypes'

const INITIAL_STATE = {
  products: [],
  loading: true,
  error: null,
}

const productsReducer = (state = INITIAL_STATE, action = {}) => {
  const { type, payload } = action
  const { SET_PRODUCTS_FAILURE, SET_PRODUCTS_START, SET_PRODUCTS_SUCCESS } =
    PRODUCTS_ACTIONS_TYPES

  switch (type) {
    case SET_PRODUCTS_START:
      return {
        ...state,
        loading: true,
        error: null,
      }
    case SET_PRODUCTS_SUCCESS:
      return {
        ...state,
        products: payload,
        loading: false,
        error: null,
      }
    case SET_PRODUCTS_FAILURE:
      return {
        ...state,
        error: payload,
        loading: false,
      }
    default:
      return state
  }
}

export default productsReducer

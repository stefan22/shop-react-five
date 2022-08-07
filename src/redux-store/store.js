import { applyMiddleware, combineReducers, compose, createStore } from 'redux'
import thunk from 'redux-thunk'
import { logger } from 'redux-logger'
import userReducer from './user/userReducer'
import productsReducer from './products/productsReducer'
import categoriesReducer from './categories/categoriesReducer'

const initialState = {}

const rootReducer = combineReducers({
  user: userReducer,
  products: productsReducer,
  categories: categoriesReducer,
})

const middleWares = [
  process.env.NODE_ENV === 'development' && logger,
  thunk,
].filter(Boolean)

const composeEnhancer =
  (process.env.NODE_ENV !== 'production' &&
    window &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose

const enhancer = composeEnhancer(applyMiddleware(...middleWares))

export const store = createStore(rootReducer, initialState, enhancer)

import { applyMiddleware, combineReducers, compose, createStore } from 'redux'
import thunk from 'redux-thunk'
import { logger } from 'redux-logger'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import userReducer from './user/userReducer'
import categoriesReducer from './categories/categoriesReducer'
import productsReducer from './products/productsReducer'

const rootReducer = combineReducers({
  user: userReducer,
  categories: categoriesReducer,
  products: productsReducer,
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

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['user'],
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const enhancer = composeEnhancer(applyMiddleware(...middleWares))

export const store = createStore(persistedReducer, undefined, enhancer)

export const persistor = persistStore(store)

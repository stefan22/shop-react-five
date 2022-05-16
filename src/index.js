import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './redux-store/store'
import App from './App'
//styles
import './styles/main.scss'
import { ProductsProvider } from './contexts/products.context'

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <ProductsProvider>
        <div className="main-wrapper">
          <App />
        </div>
      </ProductsProvider>
    </Provider>
  </BrowserRouter>,

  document.getElementById('root')
)
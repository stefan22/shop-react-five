import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { UserProvider } from './contexts/user.context'
import App from './App'
//styles
import './styles/main.scss'
import { ProductsProvider } from './contexts/products.context'

ReactDOM.render(
  <BrowserRouter>
    <UserProvider>
      <ProductsProvider>
        <div className="main-wrapper">
          <App />
        </div>
      </ProductsProvider>
    </UserProvider>
  </BrowserRouter>,

  document.getElementById('root')
)
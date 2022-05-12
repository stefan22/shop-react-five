import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { UserProvider } from './contexts/user.context'
import App from './App'
//styles
import './styles/main.scss'

ReactDOM.render(
  <BrowserRouter>
    <UserProvider>
      <div className="main-wrapper">
        <App />
      </div>
    </UserProvider>
  </BrowserRouter>,

  document.getElementById('root')
)

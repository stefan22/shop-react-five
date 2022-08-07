import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './redux-store/store'
import App from './App'
//styles
import './styles/main.scss'

store.subscribe(() => {
  // eslint-disable-next-line no-console
  console.log('store ', store.getState())
})

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <div className="main-wrapper">
        <App />
      </div>
    </BrowserRouter>
  </Provider>,

  document.getElementById('root')
)

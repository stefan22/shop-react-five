import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store, persistor } from './redux-store/store'
import { PersistGate } from 'redux-persist/integration/react'
import App from './App'
//styles
import './styles/main.scss'

ReactDOM.render(
  <Provider store={store}>
    <PersistGate
      loading={null}
      persistor={persistor}
    >
      <BrowserRouter>
        <div className="main-wrapper">
          <App />
        </div>
      </BrowserRouter>
    </PersistGate>
  </Provider>,

  document.getElementById('root')
)

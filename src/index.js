import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
//firebase
import Firebase, { FirebaseContext } from './firebase';

//styles
import './styles/main.scss';

ReactDOM.render(
  <FirebaseContext.Provider value={new Firebase()}>
    <div className="main-wrapper">
      <App />
    </div>
  </FirebaseContext.Provider>,
  document.getElementById('root'),
);

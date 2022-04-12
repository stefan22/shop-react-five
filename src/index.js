import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom";
import App from './App';
//firebase
import Firebase, { FirebaseContext } from './firebase';
//styles
import './styles/main.scss';

ReactDOM.render(

  <FirebaseContext.Provider value={new Firebase()}>
    <BrowserRouter>
      <div className="main-wrapper">
        <App />
      </div>
    </BrowserRouter>
  </FirebaseContext.Provider>,

  document.getElementById('root')
);

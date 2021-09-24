import React from 'react';
import {
  Switch,
  Route,
  BrowserRouter as Router,
} from 'react-router-dom';
//pages
// import Hats from './pages/hats';
// import Jackets from './pages/jackets';
// import Sneakers from './pages/sneakers';
// import Women from './pages/women';
// import Men from './pages/men';
import HomePage from './pages/home';
import ShopPage from './pages/shop';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={ShopPage} />
        <Route
          exact
          path="/shop/:cat"
          component={ShopPage}
        />

        <Route path="/signin" />
      </Switch>
    </Router>
  );
}

export default App;

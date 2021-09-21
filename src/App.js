import React from "react";
import {Switch, Route, BrowserRouter as Router} from "react-router-dom";
//pages
import HomePage from "./pages/home";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" />
        <Route path="/signin" />
      </Switch>
    </Router>
  );
}

export default App;

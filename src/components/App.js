import React from "react";
import { Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./Header";
import history from "../history";

const App = () => {
  return (
    <div className="ui raised very padded text container segment">
      <Router history={history}>
        <div>
          <Header />
          <Route path="/" exact component={Home} />
 
        </div>
      </Router>
    </div>
  );
};

export default App;

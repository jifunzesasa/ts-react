import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import About from "./pages/About";
import Users from "./pages/Users";
import Home from "./pages/Home";
import Contact from "./pages/Contact";

import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import AppNav from "./components/AppNav";

const App: React.FC = () => {
  return (
      <Router>
        <div>
          <AppNav/>

          <Switch>
            <Route path="/about">
              <About/>
            </Route>
            <Route path="/users">
              <Users/>
            </Route>
            <Route path="/contact">
              <Contact/>
            </Route>
            <Route path="/">
              <Home/>
            </Route>
          </Switch>
        </div>
      </Router>
  );
};

export default App;

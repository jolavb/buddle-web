import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import HomePage from "views/HomePage/HomePage.jsx";
import AboutPage  from "views/AboutPage/About.jsx";

import IndexRoutes from "routes/index.jsx";

import "assets/scss/material-kit-react.css";

// var hist = createBrowserHistory();

ReactDOM.render(
  <BrowserRouter>
    {/* <Switch>
      {indexRoutes.map((prop, key) => {
        return <Route path={prop.path} key={key} component={prop.component} />;
      })}
    </Switch> */}

      <IndexRoutes />

  </BrowserRouter>,
  document.getElementById("root")
);

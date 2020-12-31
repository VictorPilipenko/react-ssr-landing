import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { routes } from "../constants/routes";
import Home from "../pages";
import SigninPage from "../pages/signin";
import "./index.css";

function App() {
  return (
    <Switch>
      <Route path={routes.home} exact component={Home} />
      <Route path={routes.signIn} exact component={SigninPage} />
      <Redirect to={{
        pathname: routes.home
      }} />
    </Switch>
  );
}

export default App;

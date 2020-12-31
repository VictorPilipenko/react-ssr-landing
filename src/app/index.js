import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { routes } from "../constants/routes";
import Home from "../pages/home";
import SignIn from "../pages/sign-in";
import GlobalStyles from "../styles/global";

function App() {
  return <>
    <GlobalStyles />
    <Switch>
      <Route path={routes.home} exact component={Home} />
      <Route path={routes.signIn} exact component={SignIn} />
      <Redirect to={{
        pathname: routes.home
      }} />
    </Switch>
  </>
}

export default App;

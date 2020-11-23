import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./containers/Home";
import NotFound from "./containers/NotFound";
import Login from "./containers/Login";
import Signup from "./containers/Signup";
import { Goals } from "./containers/Goals";
import { Dashboard } from "./containers/Dashboard";



export default function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/login">
        <Login />
      </Route>
      <Route exact path="/signup">
          <Signup />
        </Route>
        <Route exact path="/goals">
          <Goals />
        </Route>
        <Route exact path="/dashboard">
          <Dashboard />
        </Route>
      <Route>
         <NotFound />
      </Route>
    </Switch>
  );
}
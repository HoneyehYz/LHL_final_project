import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./containers/Home";
import NotFound from "./containers/NotFound";
import Login from "./containers/Login";
import Signup from "./containers/Signup";
import  Default  from "./containers/Default";
import Chat from "./containers/Chat";

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
      <Route exact path="/default">
          <Default />
        </Route>
        <Route exact path="/chat">
          <Chat />
        </Route>
      <Route>
         <NotFound />
      </Route>
    </Switch>
  );
}
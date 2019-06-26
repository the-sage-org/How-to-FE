import React from "react";
import { Switch, Route } from "react-router-dom";
import Login from "./component/loginForm";
import Register from "./component/registerForm"

export default function App() {
  return (
    <div className="wrapper">
      <Switch>
      <Route exact path="/" component={Login} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
      </Switch>
    </div>
  );
}

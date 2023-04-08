import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./global.scss";
import TodoList from "./pages/TodoList";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import State from "./state";
import UserAuthentication from "./auth";

const App = () => {
  return (
    <BrowserRouter>
      <UserAuthentication>
        <Switch>
          <Route exact path="/">
            <State>
              <TodoList />
            </State>
          </Route>
          <Route exact path="/signup">
            <Signup />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
        </Switch>
      </UserAuthentication>
    </BrowserRouter>
  );
};

export default App;

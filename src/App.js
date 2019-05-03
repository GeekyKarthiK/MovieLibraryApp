import React, { Component } from "react";
import "./App.css";
import Movies from "./components/Movies";
import { Switch, Route, Redirect } from "react-router-dom";
import Customers from "./components/Customers";
import MovieForm from "./components/MovieForm";
import Rentals from "./components/Rentals";
import NotFound from "./components/NotFound";
import Navbar from "./components/Nav";
import LoginForm from "./components/LoginForm";

class App extends Component {
  render() {
    return (
      <>
        <Navbar />

        <div className="main">
          <Switch>
            <Route path={"/login"} component={LoginForm} />
            <Route path={"/customers"} component={Customers} />
            <Route path={"/movies/:id"} component={MovieForm} />
            <Route path={"/rentals"} component={Rentals} />
            <Route path={"/movies"} component={Movies} />
            <Route path={"/not-found"} component={NotFound} />
            <Redirect from={"/"} exact to={"/movies"} />
            <Redirect to={"/not-found"} />
          </Switch>
        </div>
      </>
    );
  }
}

export default App;

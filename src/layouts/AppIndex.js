import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import SignIn from '../components/SignIn';

class AppIndex extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false
    };
    this.authCheck();
  }

  authCheck = () => {
    const isLoggedIn = Boolean(localStorage.getItem("isUserAlreadyLogggedIn"));
    isLoggedIn && this.setState(state => state.isLoggedIn = isLoggedIn);
  };

  render() {
    return <React.Fragment>
        <Switch>
         
        <Route exact path="/" component={ this.state.isLoggedIn? Home : SignIn} />
         
        </Switch>
      </React.Fragment>;
  }
}

export default AppIndex;

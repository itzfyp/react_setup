import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom";
import AppHeader from '../views/app/AppHeader';
import AppHome from '../views/app/AppHome';
import AppAbout from '../views/app/AppAbout';

class Home extends Component {

  render() {
    return (<React.Fragment>
      <AppHeader />
      <Switch>
        <Route exact path="/home" component={AppHome} />
        <Route path="/about" component={AppAbout} />
      </Switch>
    </React.Fragment>);
  }
}

export default Home;
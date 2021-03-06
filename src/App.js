import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import * as RESTAPI from "./RESTAPI";
import Home from "./pages/Home";
// Import fontawesome library
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import PageNotFound from './pages/404'
import "./App.scss";

// Add fontawesome to the library for use across the app
library.add(fab);
class UnicornsApp extends Component {
  state = {
    unicorns: []
  };
  // Get all the unicorns from the RESTAPI
  componentDidMount() {
    RESTAPI.getAll().then(response => {
      this.setState({
        unicorns: response
      });
    });
  }

  // This allows to pass as props to all children if needed
  placeUnicorns = (unicorn, location) => {
    RESTAPI.update(unicorn, location).then(response => {
      unicorn.location = location;
      this.setState(state => ({
        unicorns: state.unicorns.filter(b => b.id !== unicorn.id).concat([unicorn])
      }));
    });
  };
  render() {
    return (
      <div className="app">
        <Switch>
          <Route
            exact
            path={"/"}
            render={() => (
              <Home unicorns={this.state.unicorns} placeUnicorns={this.placeUnicorns} />
            )}
          />
              {/* Handle page not found */}
          <Route component={PageNotFound} />
        </Switch>
      </div>
    );
  }
}

export default UnicornsApp;

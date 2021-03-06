import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";
import RegistrationPage from "./pages/RegistrationPage";
import ProfileOptions from "./pages/ProfileOptions";

import SearchPage from "./pages/SearchPage";

class App extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/profile/:username" component={Profile} />
        <Route exact path="/registerUser" component={RegistrationPage} />
        <Route exact path="/profileoptions" component={ProfileOptions} />

        <Route exact path="/search" component={SearchPage} />
        <Route exact path="*" component={NotFound} />
      </Switch>
    );
  }
}

export default App;

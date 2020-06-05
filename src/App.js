import React, { Component } from "react";
import "./App.css";
import CssBaseline from "@material-ui/core/CssBaseline";
import Navbar from "./components/nav";
import Home from "./pages/Home";
import TVShows from "./pages/TvShowsPage";
import Movies from "./pages/MoviesPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <CssBaseline />
          <Navbar />
          <Switch>
            <Route path="/TVShows" component={TVShows} />
            <Route path="/Movies" component={Movies} />
            <Route path="/" component={Home} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;

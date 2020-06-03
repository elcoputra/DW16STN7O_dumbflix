import React, { Component } from "react";
import "./App.css";
import CssBaseline from "@material-ui/core/CssBaseline";
import Navbar from "./components/nav";
import Home from "./pages/Home";

class App extends Component {
  render() {
    return (
      <div>
        <CssBaseline />
        <Navbar />
        <Home />
      </div>
    );
  }
}

export default App;

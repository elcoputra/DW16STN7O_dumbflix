import React, { Component } from "react";
import ImgOnlyHeader from "../components/headerHome";
import TvComponent from "../components/tv";
import MovieComponent from "../components/movie";

class Home extends Component {
  render() {
    return (
      <div>
        <ImgOnlyHeader />
        <TvComponent />
        <MovieComponent />
      </div>
    );
  }
}
export default Home;

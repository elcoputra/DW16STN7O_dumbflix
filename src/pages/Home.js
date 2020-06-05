import React, { Component } from "react";
import ImgOnlyHeader from "../components/headerHome";
import TvComponent from "../components/tv";
import MovieComponent from "../components/movie";

class Home extends Component {
  render() {
    return (
      <div>
        <ImgOnlyHeader />
        <TvComponent init={0} end={6}/>
        <MovieComponent init={0} end={6}/>
      </div>
    );
  }
}
export default Home;

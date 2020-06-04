import React, { Component } from "react";
import ImgOnlyHeader from "../components/imgOnlyHeader";
import TvComponent from "../components/tv";


class Home extends Component {
  render() {
    return (
      <div>
        <ImgOnlyHeader />
        <TvComponent />
        <h2 style={{ color: "white" }}>HOME MOVIE LIST COMPONENT</h2>
      </div>
    );
  }
}
export default Home;

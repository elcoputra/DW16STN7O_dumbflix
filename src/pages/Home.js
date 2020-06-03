import React, { Component } from "react";
import HeaderImage from "../components/imgOnlyHeader";

class Home extends Component {
  render() {
    return (
      <div>
        <HeaderImage />
        <h2 style={{ color: "white" }}>HOME TV LIST COMPONENT</h2>
        <h2 style={{ color: "white" }}>HOME MOVIE LIST COMPONENT</h2>
        
      </div>
    );
  }
}
export default Home;

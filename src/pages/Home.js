import React, { Component } from "react";
import one from "../assets/images/batman.jpg";
import two from "../assets/images/ac.jpg";
import three from "../assets/images/war.jpg";
import Carousel from "../components/carousel";

class Home extends Component {
  render() {
    return (
        <Carousel one={one} two={two} three={three} fullPageHeight/>
    );
  }
}

export default Home;

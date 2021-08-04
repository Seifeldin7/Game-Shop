import React, { Component } from "react";
import one from "../assets/images/uncharted.jpg";
import two from "../assets/images/uncharted.jpg";
import three from "../assets/images/uncharted.jpg";
import Carousel from "../components/Carousel";

class Home extends Component {
  render() {
    return (
        <Carousel one={one} two={two} three={three} fullPageHeight/>
    );
  }
}

export default Home;

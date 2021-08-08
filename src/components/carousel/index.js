import React from "react";

export default function Carousel ({children, ...props}) {
  return (
    <div
      id="carouselExampleCaptions"
      className="carousel slide carousel-fade"
      data-ride="carousel"
      data-interval="2000"
    >
      <ol className="carousel-indicators">
        <li
          data-target="#carouselExampleCaptions"
          data-slide-to="0"
          className="active"
        ></li>
        <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
        <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
      </ol>
      <div className="carousel-inner">
        <div
          className="carousel-item active"
          style={{ height: props.fullPageHeight ? "100vh" : "30rem" }}
        >
          <img
            src={props.one}
            className="d-block w-100"
            alt="game"
            style={{ height: props.fullPageHeight ? "100vh" : "30rem" }}
          />
          <div className="carousel-caption d-none d-md-block">
            <h1>Shop For Games</h1>
            <p>Best Prices in the Market.</p>
          </div>
        </div>
        <div
          className="carousel-item"
          style={{ height: props.fullPageHeight ? "100vh" : "30rem" }}
        >
          <img
            src={props.two}
            className="d-block w-100"
            alt="game"
            style={{ height: props.fullPageHeight ? "100vh" : "30rem" }}
          />
          <div className="carousel-caption d-none d-md-block">
            <h1>Great Deals</h1>
          </div>
        </div>
        <div
          className="carousel-item"
          style={{ height: props.fullPageHeight ? "100vh" : "30rem" }}
        >
          <img
            src={props.three}
            className="d-block w-100"
            alt="game"
            style={{ height: props.fullPageHeight ? "100vh" : "30rem" }}
          />
          <div className="carousel-caption d-none d-md-block">
            <h1>Best Prices in the Market</h1>
          </div>
        </div>
      </div>
      <a
        className="carousel-control-prev"
        href="#carouselExampleCaptions"
        role="button"
        data-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a
        className="carousel-control-next"
        href="#carouselExampleCaptions"
        role="button"
        data-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
  );
};

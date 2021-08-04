import React, { Component } from "react";
import Carousel from "../components/Carousel";
import ProductItem from "../components/ProductItem.js";
import { getAll as getAllProducts } from "../api/Products";
import "./Products.css";
import one from "../assets/images/uncharted.jpg";
import two from "../assets/images/uncharted.jpg";
import three from "../assets/images/uncharted.jpg";

class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    };
  }

  componentDidMount() {
    getAllProducts()
      .then(result => {
        this.setState({ products: result });
      })
      .catch(err => {
        console.log(err);
      });
  }
  render() {
    return (
      <React.Fragment>
        <Carousel one={one} two={two} three={three} />
        <h1 className="text-center cart up-3">
          <i className="fa fa-shopping-bag"></i> Our Products
        </h1>
        <div className="container">
          <div className="row row-cols-1 row-cols-md-3">
            {this.state.products.map(product => (
              <ProductItem product={product} key={product.id} />
            ))}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Products;

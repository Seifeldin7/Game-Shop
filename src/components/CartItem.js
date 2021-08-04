import React, { Component } from "react";
import { connect } from "react-redux";
import { removeFromCart } from "../store/actions/action";

class CartItem extends Component {
  render() {
    const { item, index } = this.props;
    const { product } = item;
    return (
      <div>
        <div className="col mb-4">
          <div className="card" style={{color: "white"}}>
          <div class="card-horizontal">
            <img src={product.image} alt="game" className="fit-image"/>
            <div className="card-body" style={{backgroundColor: "#2E3B45"}}>
              <h5 className="card-title">{product.name}</h5>
              <p>
                Price :{" "}
                <span style={{ color: "#FFDC11", fontWeight: "bold" }}>
                  ${product.price}
                </span>{" "}
              </p>
              <p>
                Total :
                <span style={{ color: "#FFDC11", fontWeight: "bold" }}>
                  ${item.quantity * product.price}
                </span>
              </p>
              <p>
                Quantity :{" "}
                <span style={{ color: "#FFDC11", fontWeight: "bold" }}>
                  {item.quantity}
                </span>{" "}
              </p>
              <button
                onClick={() => this.props.removeFromCart(index)}
                className="btn btn-danger"
              >
                <i className="fa fa-trash"> </i>
                <span className="delete">Delete</span>
              </button>
            </div>
          </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    removeFromCart: index => dispatch(removeFromCart(index))
  };
};

export default connect(null, mapDispatchToProps)(CartItem);

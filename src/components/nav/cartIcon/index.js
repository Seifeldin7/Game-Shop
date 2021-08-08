import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./styles.css";
import { connect } from "react-redux";
class CartIcon extends Component {
  render() {
    return (
      <div className="container">
        <Link to="./cart">
          <i className="fa fa-shopping-cart cart">
            <span className="badge badge-danger remove-cart">
              {this.props.totalQuantity}
            </span>
          </i>
        </Link>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    totalQuantity: state.cart? state.cart.reduce(
      (total, item) => total + parseInt(item.quantity),
      0
    ) : 0
  };
};
export default connect(mapStateToProps)(CartIcon);

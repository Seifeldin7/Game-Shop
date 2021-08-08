import React, { Component } from "react";
import CartItem from "../components/cart-item/index.js";
import "./Products.css";
import { connect } from "react-redux";
import { clearCart } from "../store/actions/action";
import { CartContainer } from "../containers/cart";

class Cart extends Component {
  placeOrder = () => {
    this.props.clearCart();
    alert("We recieved your order, and we are working on it.");
  };

  render() {
    return (
      <React.Fragment>
        <h1 className="text-center cart up-2">
          <i className="fa fa-shopping-cart cart"></i> Your Bag
        </h1>
        {/* <div className="row row-cols-1">
            {this.props.cartItems?.map((item, index) => (
              <CartItem item={item} index={index} key={index} />
            ))}
          </div> */}
        <CartContainer items={this.props.cartItems} />

        <div className="container">
          <h1 style={{ color: "white" }}>
            <i className="fa fa-money blue"></i> CART TOTAL : $
            {this.props.total}
          </h1>
          <button
            type="button"
            className="btn btn-primary btn-lg btn-block confirm-order"
            onClick={this.placeOrder}
          >
            CHECKOUT
          </button>
        </div>
      </React.Fragment>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    cartItems: state.cart,
    total: state.cart
      ? state.cart.reduce(
          (total, item) => total + item.quantity * item.product.price,
          0
        )
      : 0,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    clearCart: () => dispatch(clearCart()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);

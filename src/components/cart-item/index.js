import React from "react";
import { connect } from "react-redux";
import { removeFromCart } from "../../store/actions/action";
import {
  Container,
  Image,
  Title,
  Button,
  Quantity,
  Price,
  Total,
  Inner,
  Header,
  Body,
  Item,
} from "./styles";

function CartItem({ children, ...props }) {
  return (
    <Item {...props}>
      <Inner>{children}</Inner>
    </Item>
  );
  // const { item, index } = props;
  // const { product } = item;
  // return (
  //   <div>
  //     <div className="col mb-4">
  //       <div className="card" style={{color: "white"}}>
  //       <div className="card-horizontal">
  //         <img src={product.image} alt="game" className="fit-image"/>
  //         <div className="card-body" style={{backgroundColor: "#2E3B45"}}>
  //           <h5 className="card-title">{product.name}</h5>
  //           <p>
  //             Price :{" "}
  //             <span style={{ color: "#FFDC11", fontWeight: "bold" }}>
  //               ${product.price}
  //             </span>{" "}
  //           </p>
  //           <p>
  //             Total :
  //             <span style={{ color: "#FFDC11", fontWeight: "bold" }}>
  //               ${item.quantity * product.price}
  //             </span>
  //           </p>
  //           <p>
  //             Quantity :{" "}
  //             <span style={{ color: "#FFDC11", fontWeight: "bold" }}>
  //               {item.quantity}
  //             </span>{" "}
  //           </p>
  //           <button
  //             onClick={() => props.removeFromCart(index)}
  //             className="btn btn-danger"
  //           >
  //             <i className="fa fa-trash"> </i>
  //             <span className="delete">Delete</span>
  //           </button>
  //         </div>
  //       </div>
  //       </div>
  //     </div>
  //   </div>
  // );
}

CartItem.Container = function CartItemContainer({ children, ...restProps }) {
  return (
    <Container className="container" {...restProps}>
      {children}
    </Container>
  );
};

CartItem.Image = function CartItemImage({ children, ...restProps }) {
  return <Image {...restProps}>{children}</Image>;
};

CartItem.Header = function CartItemHeader({ children, ...restProps }) {
  return <Header {...restProps}>{children}</Header>;
};

CartItem.Body = function CartItemBody({ children, ...restProps }) {
  return <Body {...restProps}>{children}</Body>;
};

CartItem.Title = function CartItemTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

CartItem.Price = function CartItemPrice({ children, ...restProps }) {
  return (
    <p>
      Price: <Price {...restProps}>{children}</Price>{" "}
    </p>
  );
};

CartItem.Total = function CartItemTotal({ children, ...restProps }) {
  return (
    <p>
      Total: <Total {...restProps}>{children}</Total>{" "}
    </p>
  );
};

CartItem.Quantity = function CartItemQuantity({ children, ...restProps }) {
  return (
    <p>
      Quantity: <Quantity {...restProps}>{children}</Quantity>{" "}
    </p>
  );
};

CartItem.Button = function CartItemButton({ children, ...restProps }) {
  return (
    <Button className="btn btn-danger" {...restProps}>
      {children}
    </Button>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeFromCart: (index) => dispatch(removeFromCart(index)),
  };
};

export default connect(null, mapDispatchToProps)(CartItem);

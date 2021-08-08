import React from "react";
import { CartItem } from "../components";

export function CartContainer({ children, ...props }) {
  return (
    <CartItem.Container>
      {props.items.map((item) => (
        <CartItem key={item.id}>
          <CartItem.Header>
            <CartItem.Image src={item.product.image} alt={item.alt} />
          </CartItem.Header>
          <CartItem.Body>
            <CartItem.Title>{item.product.name}</CartItem.Title>
            <CartItem.Price>{item.product.price}</CartItem.Price>
            <CartItem.Total>
              {item.product.price * item.quantity}
            </CartItem.Total>
            <CartItem.Quantity>{item.quantity}</CartItem.Quantity>
            <CartItem.Button><i className="fa fa-trash"> </i> Remove</CartItem.Button>
          </CartItem.Body>
        </CartItem>
      ))}
    </CartItem.Container>
  );
}

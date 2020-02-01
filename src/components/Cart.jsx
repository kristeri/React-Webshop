import React from "react";
import { WebshopConsumer } from "../context";
import styled from "styled-components";

const Cart = () => {
  return (
    <div>
      <WebshopConsumer>
        {value => {
          const {
            cart,
            removeItem,
            decrement,
            increment,
            clearCart,
            cartSubTotal,
            cartTax,
            cartTotal
          } = value;
          if (cart.length > 0) {
            return (
              <>
                {cart.map(item => {
                  const { id, title, img, price, count } = item;
                  return (
                    <div>
                      <img
                        src={img}
                        style={{ width: "auto", height: 200 }}
                        alt=""
                      ></img>
                      <span>{title}</span>
                      <span>{price}</span>
                      <Button onClick={() => decrement(id)}>-</Button>
                      <span>{count}</span>
                      <Button onClick={() => increment(id)}>+</Button>
                      <Button onClick={() => removeItem(id)}>Remove</Button>
                    </div>
                  );
                })}
                <Button onClick={() => clearCart()}>Clear cart</Button>
                <h5>
                  <span className="text-title">Subtotal:</span>
                  <strong>$ {cartSubTotal.toFixed(2)}</strong>
                </h5>
                <h5>
                  <span className="text-title">Tax:</span>
                  <strong>$ {cartTax.toFixed(2)}</strong>
                </h5>
                <h5>
                  <span className="text-title">Total:</span>
                  <strong>$ {cartTotal.toFixed(2)}</strong>
                </h5>
              </>
            );
          } else {
            return (
              <>
                <span>Your cart is empty.</span>
              </>
            );
          }
        }}
      </WebshopConsumer>
    </div>
  );
};

const Button = styled.button`
  color: #637ffd;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid #637ffd;
  border-radius: 3px;
`;

export default Cart;

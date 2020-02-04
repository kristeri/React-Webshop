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
                <div>
                  <div className="row">
                    <div className="col-10 mx-auto col-lg-2">
                      <strong>product</strong>
                    </div>
                    <div className="col-10 mx-auto col-lg-2">
                      <strong>Name</strong>
                    </div>
                    <div className="col-10 mx-auto col-lg-2">
                      <strong>Price</strong>
                    </div>
                    <div className="col-10 mx-auto col-lg-2">
                      <strong>Quantity</strong>
                    </div>
                    <div className="col-10 mx-auto col-lg-2">
                      <strong>Total</strong>
                    </div>
                  </div>
                </div>
                {cart.map(item => {
                  const { id, title, img, price, count } = item;
                  return (
                    <div className="row">
                      <div className="col-10 mx-auto col-lg-2">
                        <img
                          src={img}
                          style={{ width: "100px", heigth: "100px" }}
                          //className="img-fluid"
                          alt=""
                        ></img>
                      </div>
                      <div className="col-10 mx-auto col-lg-2">
                        <span className="d-lg-none">product :</span> {title}
                      </div>
                      <div className="col-10 mx-auto col-lg-2">
                        <strong>
                          <span className="d-lg-none">price :</span> ${price}
                        </strong>
                      </div>
                      <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0 ">
                        <div className="row">
                          <div>
                            <Button onClick={() => decrement(id)}>-</Button>
                            <span>{count}</span>
                            <Button onClick={() => increment(id)}>+</Button>
                            <Button onClick={() => removeItem(id)}>
                              Remove
                            </Button>
                          </div>
                        </div>
                      </div>
                      <div className="col-10 mx-auto col-lg-2 ">
                        <strong>
                          item total : ${(price * count).toFixed(2)}{" "}
                        </strong>
                      </div>
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

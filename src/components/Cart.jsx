import React from "react";
import { WebshopConsumer } from "../context";
import styled from "styled-components";
import { ShoppingCart } from "@material-ui/icons";

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
                <div className="pt-3">
                  <div className="row">
                    <div className="col-10 mx-auto col-lg-2">
                      <strong>Product</strong>
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
                    <div className="row pt-1">
                      <div className="col-10 mx-auto col-lg-2">
                        <img
                          src={img}
                          style={{ width: "60px", heigth: "60px" }}
                          alt=""
                        ></img>
                      </div>
                      <div className="col-10 mx-auto col-lg-2">
                        <span className="d-lg-none">product:</span> {title}
                      </div>
                      <div className="col-10 mx-auto col-lg-2">
                        <strong>
                          <span className="d-lg-none">price:</span> ${price}
                        </strong>
                      </div>
                      <div className="col-10 mx-auto col-lg-2">
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
                <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-right">
                  <ClearCartButton onClick={() => clearCart()}>
                    Clear cart
                  </ClearCartButton>
                  <h5>
                    <span className="text-title">Subtotal: </span>
                    <strong>$ {cartSubTotal.toFixed(2)}</strong>
                  </h5>
                  <h5>
                    <span className="text-title">Tax: </span>
                    <strong>$ {cartTax.toFixed(2)}</strong>
                  </h5>
                  <h5>
                    <span className="text-title">Total: </span>
                    <strong>$ {cartTotal.toFixed(2)}</strong>
                  </h5>
                </div>
              </>
            );
          } else {
            return (
              <div
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  display: "flex",
                  paddingTop: "50px"
                }}
              >
                <h3>Your cart is empty.</h3>
                <ShoppingCart style={{ color: "#637FFD", fontSize: "100px" }} />
              </div>
            );
          }
        }}
      </WebshopConsumer>
    </div>
  );
};
const ClearCartButton = styled.button`
  color: #637ffd;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid #637ffd;
  border-radius: 3px;
`;

const Button = styled.button`
  color: #637ffd;
  font-size: 1em;
  margin: 0em 1em 0em 1em;
  padding: 0.25em 1em;
  border: 2px solid #637ffd;
  border-radius: 3px;
`;

export default Cart;

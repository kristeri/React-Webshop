import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { WebshopConsumer } from "../context";
import { AddShoppingCart } from "@material-ui/icons";

const Product = ({ product }) => {
  const { id, title, img, price, inCart } = product;
  return (
    <StyledProduct className="col-9 mx-auto col-md-6 col-lg-3 my-3">
      <div className="card">
        <WebshopConsumer>
          {value => (
            <div
              className="img-container p-5"
              onClick={() => value.handleDetail(id)}
            >
              <Link to="/details">
                <img
                  src={img}
                  style={{ width: "auto", height: 200 }}
                  alt=""
                  className="card-img-top"
                />
              </Link>
              <StyledAddCartButton
                className="cart-btn"
                disabled={inCart ? true : false}
                onClick={() => {
                  value.addToCart(id);
                  value.openModal(id);
                }}
              >
                {inCart ? (
                  <p className="mb-0" disabled>
                    In cart
                  </p>
                ) : (
                  <AddShoppingCart />
                )}
              </StyledAddCartButton>
            </div>
          )}
        </WebshopConsumer>
        <div className="card-footer d-flex justify-content-between">
          <p className="align-self-center mb-0">{title}</p>
          <h5 className="text-blue font-italic mb-0">
            <span className="mr-1">$</span>
            {price}
          </h5>
        </div>
      </div>
    </StyledProduct>
  );
};

const StyledAddCartButton = styled.button`
  display: inline-block;
  color: #637ffd;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid #637ffd;
  border-radius: 3px;
  display: block;
`;

const StyledProduct = styled.div``;

export default Product;

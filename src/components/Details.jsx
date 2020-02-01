import React from "react";
import { WebshopConsumer } from "../context";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Details = () => {
  return (
    <WebshopConsumer>
      {value => {
        const {
          id,
          company,
          img,
          info,
          price,
          title,
          inCart
        } = value.detailProduct;
        return (
          <div className="container py-5">
            <div className="row">
              <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                <h1>{title}</h1>
              </div>
            </div>
            <div className="row">
              <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                <img
                  src={img}
                  style={{ width: "auto", height: 200 }}
                  className="img-fluid"
                  alt=""
                />
              </div>
              <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                <h2>Model : {title}</h2>
                <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
                  Made by : <span className="text-uppercase">{company}</span>
                </h4>
                <h4 className="text-blue">
                  <strong>
                    price : <span>${price}</span>
                  </strong>
                </h4>
                <p className="text-capitalize font-weight-bold mt-3 mb-0">
                  Product information:
                </p>
                <p className="text-muted lead">{info}</p>
                <div>
                  <Link to="/">
                    <Button>Back to products</Button>
                  </Link>
                  <Button
                    disabled={inCart ? true : false}
                    onClick={() => {
                      value.addToCart(id);
                      value.openModal(id);
                    }}
                  >
                    {inCart ? "In cart" : "Add to cart"}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        );
      }}
    </WebshopConsumer>
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

export default Details;

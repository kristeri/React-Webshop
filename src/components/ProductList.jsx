import React from "react";
import Product from "./Product";
import { WebshopConsumer } from "../context";
import styled from "styled-components";

const ProductList = () => {
  return (
    <StyledDiv>
      <div>
        <img
          src={require("../banner_image.png")}
          style={{ width: "100%", height: "600px" }}
          alt=""
        ></img>
        <BannerDiv>
          <h1 style={{ color: "#FFF", fontSize: "80px", padding: "10px" }}>
            Welcome to Webshop.
          </h1>
          <h3 style={{ color: "#FFF" }}>
            Buy and sell products online, around the world.
          </h3>
          <h3 style={{ color: "#FFF" }}>We ship worldwide. Fast.</h3>
        </BannerDiv>
      </div>
      <StyledContainer className="row">
        <WebshopConsumer>
          {value => {
            return value.products.map(product => {
              return <Product key={product.id} product={product} />;
            });
          }}
        </WebshopConsumer>
      </StyledContainer>
    </StyledDiv>
  );
};

const BannerDiv = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const StyledDiv = styled.div`
  flex-direction: column;
  justify-content: center;
  text-align: center;
`;

const StyledContainer = styled.div`
  max-width: 100%;
  overflow-x: hidden;
`;

export default ProductList;

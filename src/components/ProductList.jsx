import React from "react";
import Product from "./Product";
import { WebshopConsumer } from "../context";
import styled from "styled-components";

const ProductList = () => {
  return (
    <StyledDiv>
      <h1>Welcome to Webshop</h1>
      <h2>Buy and sell products online around the world</h2>
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

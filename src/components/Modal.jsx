import React from "react";
import styled from "styled-components";
import { WebshopConsumer } from "../context";
import { Link } from "react-router-dom";

const Modal = () => {
  return (
    <div>
      <WebshopConsumer>
        {value => {
          const { modalOpen, closeModal } = value;
          const { img, title, price } = value.modalProduct;

          if (!modalOpen) {
            return null;
          } else {
            return (
              <StyledModal>
                <div className="container">
                  <div className="row">
                    <div
                      id="modal"
                      className="col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalize"
                    >
                      <h5>Item added to the cart</h5>
                      <img
                        src={img}
                        style={{ width: "auto", height: 200 }}
                        className="img-fluid"
                        alt=""
                      />
                      <h5>{title}</h5>
                      <h5 className="text-muted">price : $ {price}</h5>
                      <Link to="/">
                        <Button onClick={() => closeModal()}>
                          Back to store
                        </Button>
                      </Link>
                      <Link to="/cart">
                        <Button onClick={() => closeModal()}>Go to cart</Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </StyledModal>
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

const StyledModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  #modal {
    background: white;
  }
`;

export default Modal;

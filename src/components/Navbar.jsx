import React from "react";
import { Link } from "react-router-dom";
import clsx from "clsx";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import { Menu } from "@material-ui/icons";
import { ShoppingCart } from "@material-ui/icons";
import styled from "styled-components";
import { WebshopConsumer } from "../context";

const Navbar = ({ classes, open, handleDrawerOpen }) => {
  return (
    <WebshopConsumer>
      {value => {
        return (
          <AppBar
            style={{
              background: "linear-gradient(45deg, #335CC5 30%, #637FFD 90%)"
            }}
            position="fixed"
            className={clsx(classes.appBar, {
              [classes.appBarShift]: open
            })}
          >
            <Toolbar>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={handleDrawerOpen}
                edge="start"
                className={clsx(classes.menuButton, open && classes.hide)}
              >
                <Menu />
              </IconButton>
              <Link to="/" style={{ color: "#FFF" }}>
                <Typography variant="h6" noWrap>
                  Webshop
                </Typography>
              </Link>
              <Link to="/cart" style={{ color: "#FFF" }} className="ml-auto">
                <div>
                  <StyledSpan>{value.countItems()}</StyledSpan>
                  <ShoppingCart style={{ fontSize: "40px" }} />
                </div>
              </Link>
            </Toolbar>
          </AppBar>
        );
      }}
    </WebshopConsumer>
  );
};

const StyledSpan = styled.span`
  color: #335cc5;
  font-size: 14px;
  position: absolute;
  text-align: center;
  width: 40px;
  padding-top: 5px;
  font-weight: 700;
`;

const StyledMenuButton = styled.button`
  background: transparent;
  color: white;
  display: inline-block;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid white;
  border-radius: 5px;
  display: block;
`;

const StyledCartButton = styled.button`
  background: rgb(55, 185, 51);
  color: white;
  display: inline-block;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid rgb(55, 185, 51);
  border-radius: 5px;
  display: block;
`;

export default Navbar;

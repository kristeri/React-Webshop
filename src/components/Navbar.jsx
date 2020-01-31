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

const Navbar = ({ classes, open, handleDrawerOpen }) => {
  return (
    <AppBar
      style={{ background: "linear-gradient(45deg, #335CC5 30%, #637FFD 90%)" }}
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
          <ShoppingCart />
        </Link>
      </Toolbar>
    </AppBar>
  );
};

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

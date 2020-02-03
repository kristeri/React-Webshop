import React from "react";
import { Link } from "react-router-dom";
import { fade, makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import InputBase from "@material-ui/core/InputBase";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import { Menu } from "@material-ui/icons";
import { ShoppingCart } from "@material-ui/icons";
import { Search } from "@material-ui/icons";
import styled from "styled-components";
import { WebshopConsumer } from "../context";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1,
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block"
    }
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25)
    },
    marginLeft: 0,
    marginRight: "3%",
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto"
    }
  },
  searchIcon: {
    width: theme.spacing(7),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  inputRoot: {
    color: "inherit"
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: 120,
      "&:focus": {
        width: 200
      }
    }
  }
}));

const Navbar = ({ open, handleDrawerOpen }) => {
  const classes = useStyles();

  return (
    <WebshopConsumer>
      {value => {
        return (
          <div className={classes.root}>
            <AppBar
              style={{
                background: "linear-gradient(45deg, #335CC5 30%, #637FFD 90%)"
              }}
              position="fixed"
            >
              <Toolbar>
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  onClick={handleDrawerOpen}
                  edge="start"
                >
                  <Menu />
                </IconButton>
                <Typography className={classes.title} variant="h6" noWrap>
                  <Link to="/" style={{ color: "#FFF" }}>
                    Webshop
                  </Link>
                </Typography>
                <div className={classes.search}>
                  <div className={classes.searchIcon}>
                    <Search />
                  </div>
                  <InputBase
                    placeholder="Search…"
                    classes={{
                      root: classes.inputRoot,
                      input: classes.inputInput
                    }}
                    inputProps={{ "aria-label": "search" }}
                  />
                </div>
                <Link to="/cart" style={{ color: "#FFF" }} className="ml-auto">
                  <div>
                    <StyledSpan>{value.countItems()}</StyledSpan>
                    <ShoppingCart style={{ fontSize: "40px" }} />
                  </div>
                </Link>
              </Toolbar>
            </AppBar>
          </div>
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

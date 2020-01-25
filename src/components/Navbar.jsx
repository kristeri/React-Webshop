import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, ShoppingCart } from '@material-ui/icons';
import styled from 'styled-components';

const Navbar = () => {
 return (
    <nav class="navbar navbar-dark bg-dark">
        <Link to="/">
            <StyledMenuButton>
                <Menu/>
            </StyledMenuButton>
        </Link>
        <ul className="navbar-nav align-items-center">
            <li className="nav-item ml-5">
                <Link to="/" className="nav-link">
                    Products
                </Link>
            </li>
        </ul>
        <Link to='/cart' className="ml-auto">
            <StyledCartButton>
                <ShoppingCart/>
                Cart
            </StyledCartButton>
        </Link> 
    </nav>
 )
}

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
`

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
`

export default Navbar;
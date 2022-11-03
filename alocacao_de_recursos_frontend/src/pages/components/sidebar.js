import React from "react";
import { Link } from 'react-router-dom'
import logo from './PUCRS-LOGO.png';

function Header() {
    return(
        <div class="sidenav">
            <img class="symbol" src={logo} alt="puc_logo"></img>
            <a href="#">symbol1</a>
            <a href="#">symbol2</a>

            <div class="symbolDown">
                <a href="#">symbol3</a>
            </div>
        </div>
    );
}

export default Header;
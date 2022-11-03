import React from "react";
import { Link } from 'react-router-dom'
import logo from '../.././Icons/pucrs.png'
import group from '../.././Icons/group.png'
import logout from '../.././Icons/logout.png'
import calendar from '../.././Icons/calendar.png'

function Header() {
    return(
        <div class="sidenav">
            <div><img class="symbol" src={logo} alt="puc_logo"></img></div>
            <div><img class="symbol" src={group} alt="puc_logo"></img></div>
            <div><img class="symbol" src={calendar} alt="puc_logo"></img></div>

            <div class="symbolDown">
                <img class="symbol" src={logout} alt="puc_logo"></img>
                
            </div>
        </div>
    );
}

export default Header;
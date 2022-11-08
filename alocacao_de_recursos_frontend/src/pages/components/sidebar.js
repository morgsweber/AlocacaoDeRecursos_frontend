import React from "react";
import { Link } from 'react-router-dom'
import logo from '../.././Icons/pucrs.png'
import group from '../.././Icons/group.png'
import logout from '../.././Icons/logout.png'
import calendar from '../.././Icons/calendar.png'

function Header() {
    return(
        <div class="sidenav">
            <div><b><img class="symbol" src={logo} alt="puc_logo"></img></b></div>
            
            <Link to={".././professor/turmas"}>
            <div><a><img class="symbol" src={group} alt="puc_logo"></img></a></div>
            </Link>

            <Link to={".././professor/horarios"}>
                <a><img class="symbol" src={calendar} alt="puc_logo"></img></a>
            </Link>

            <Link to={".././login"}>
                <a><img class="symbol" src={logout} alt="puc_logo"></img></a>
            </Link>


        </div>
    );
}

export default Header;
import React from "react";
import { Link } from 'react-router-dom'

function Header() {
  return(
    <div>

      <h1>    
      
      <Link to={".././login"}>
        <button>
          login
        </button>
      </Link>
      </h1>
    </div>

  
  
  );
}
export default Header;

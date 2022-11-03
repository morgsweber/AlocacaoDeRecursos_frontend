import React from "react";
import logo from '../.././Icons/pucrs.png'

const AppLogo = () => {

  return (
    (
      <div>
        <img class="App-logo" src={logo} alt="PUCRS logo" />
        <h2 class ="Title-logo">PUCRS</h2>
      </div>
    )
  );
};

export default AppLogo;
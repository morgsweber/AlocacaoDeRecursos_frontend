import React from "react";
import logo from './PUCRS-LOGO.png';

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
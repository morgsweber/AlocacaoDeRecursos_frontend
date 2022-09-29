import LoginButton from "./components/login-button";
import LogoutButton from "./components/logout-button";
//import Profile from './components/profile';
import AppLogo from "./components/app-logo";
import React from "react";
import "./App.css";

function App() {
  return (
    <div class="container">
      <div>
        <AppLogo />
        <LoginButton />
        <LogoutButton />
      </div>
    </div>
  );
}

export default App;

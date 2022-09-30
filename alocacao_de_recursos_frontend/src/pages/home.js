import LoginButton from "./components/login-button";
import LogoutButton from "./components/logout-button";
import AppLogo from "./components/app-logo";
import React from "react";
import "./home.css";

function Home() {
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

export default Home;

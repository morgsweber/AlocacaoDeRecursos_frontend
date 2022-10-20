import LoginButton from "./components/login-button";
import LogoutButton from "./components/logout-button";
import AppLogo from "./components/app-logo";
import React from "react";
import "./pages_css/login.css";

function Login() {
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

export default Login;

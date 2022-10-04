import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <button class="sign-out" onClick={() => logout({ returnTo: window.location.origin })}>
      Sign Out
    </button>
  );
};

export default LogoutButton;
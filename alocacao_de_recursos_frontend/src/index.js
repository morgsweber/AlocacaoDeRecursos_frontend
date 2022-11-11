import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Auth0Provider
      domain={"alocacao-de-recursos.us.auth0.com"}
      clientId={"1atUjfY2HNIL4swEXvG8Iqjur7NI0pHO"}
      redirectUri={window.location.origin}
    >
      <Routes>
        <Route path="/*" element={<App />} />
      </Routes>
    </Auth0Provider>
  </BrowserRouter>
);
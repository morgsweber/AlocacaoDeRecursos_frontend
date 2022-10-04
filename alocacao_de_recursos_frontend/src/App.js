import Login from "./pages/login";
import Missing from "./pages/missing";
import Disciplinas from "./pages/disciplinas";
import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Layout from "./pages/components/layout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* public routes */}
        <Route path="login" element={<Login />} />

        {/* protected routes */}
        <Route path="disciplinas" element={<Disciplinas />} />

        {/* catch all */}
        <Route path="*" element={<Missing />} />
      </Route>
    </Routes>
  );
}

export default App;

import Login from "./pages/login";
import React from "react";
import "./App.css";
import { Routes, Route } from 'react-router-dom';
import Layout from "./pages/components/layout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* public routes */}
        <Route path="login" element={<Login />} />

        {/* protected routes */}

        {/* catch all */}
      </Route>
      
    </Routes>
  );
}

export default App;

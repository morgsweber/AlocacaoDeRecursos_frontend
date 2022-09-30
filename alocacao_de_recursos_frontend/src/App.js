import Home from "./pages/home";
import React from "react";
import "./App.css";
import { Routes, Route } from 'react-router-dom';
import Layout from "./pages/components/layout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="home" element={<Home />} />
      </Route>
      
    </Routes>
  );
}

export default App;

import Login from "./pages/login";
import Missing from "./pages/missing";
import Aluno from "./pages/aluno";
import Adm from "./pages/adm";
import Professor from "./pages/professor";
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
        <Route path="aluno" element={<Aluno />} />
        <Route path="professor" element={<Professor />} />
        <Route path="adm" element={<Adm />} />

        {/* catch all */}
        <Route path="*" element={<Missing />} />
      </Route>
    </Routes>
  );
}

export default App;

import Login from "./pages/login";
import Missing from "./pages/missing";

import AlunoHorarios from "./pages/alunoHorarios";
import AlunoTurmas from "./pages/alunoTurmas";
import AlunoCronograma from "./pages/alunoCronograma";

import Gestor from "./pages/gestor";
import GestorTurmas from "./pages/gestorTurmas";

import ProfessorHorarios from "./pages/professorHorarios";
import ProfessorTurmas from "./pages/professorTurmas";
import ProfessorCronograma from "./pages/professorCronograma";

import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./pages/components/layout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* public routes */}
        <Route path="login" element={<Login />} />

        {/* protected routes */}
        <Route path="aluno/horarios" element={<AlunoHorarios />} />
        <Route path="aluno/turmas" element={<AlunoTurmas />} />
        <Route path="aluno/cronograma" element={<AlunoCronograma />} />

        <Route path="professor/horarios" element={<ProfessorHorarios />} />
        <Route path="professor/turmas" element={<ProfessorTurmas />} />
        <Route path="professor/cronograma" element={<ProfessorCronograma />} />

        <Route path="gestor" element={<Gestor />} />
        <Route path="gestor/turmas" element={<GestorTurmas />} />

        {/* catch all */}
        <Route path="*" element={<Missing />} />

      </Route>
    </Routes>
  );
}

export default App;

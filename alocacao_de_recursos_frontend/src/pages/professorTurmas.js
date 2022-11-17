import React, { useState, useEffect } from 'react';
import { withAuthenticationRequired } from "@auth0/auth0-react";
import Loading from "./loading";
import Sidebar from "./components/sidebar"
import "./pages_css/professorTurmas.css";
import "./pages_css/base.css";

import api from '../services/api';

export const ProfessorTurmas = () => {

  const [turmas, setTurmas] = useState('');

  useEffect(() => {
    api.get('professor/turmas/36').then(response => {
      setTurmas(response.data)
    })
  });

  return (
    <>
      <Sidebar />
      <div class="main">
        <div class="header">
          <p>Disciplinas</p>
        </div>
        <div class="main-turmas">

          {turmas.map((data, key) => {
            return (
              <button key={key} class="turmas-container">
                <p>
                  <span class="f1">{data.discipline}</span>
                  <br />
                  <span class="f2">Prof: {data.teacherName}</span>
                  <br />
                  <span class="f2">Turma: {data.groupId}</span>
                </p>
              </button>);
          })}

        </div>
      </div>
    </>

  );
}

export default withAuthenticationRequired(ProfessorTurmas, {
  onRedirecting: () => <Loading />,
});

import React, { useState, useEffect } from 'react';
import { withAuthenticationRequired } from "@auth0/auth0-react";
import Loading from "./loading";
import Sidebar from "./components/sidebar";

import api from '../services/api';

function GestorTurmas() {


  var [request, setTurmas] = useState([]);

  useEffect(() => {
    api.get('gestor/turmas/36').then(response => {
      setTurmas(response.data)
    })
  });

  //mock
  request = [
    {
      "discipline" : "disciplina",
      "teacher" : "professor",
      "groupId" : "turma",
      "sala_original" : "sala orginal",
      "sala_alvo" : "sala alvo",
      "justificativa": "justificativa"
    }
  ]

  return (
    <>
      <Sidebar />
      <div class="main">
        <div class="header">
          <p>Disciplinas</p>
        </div>
        <div class="main-request">

          {request.map((data, key) => {
            return (
              <button key={key} class="request-container">
                <p>
                  <span>{data.discipline}</span>
                  <span>{data.teacherName}</span>
                  <span>{data.groupId}</span>
                  <span>{data.sala_original}</span>
                  <span>{data.sala_alvo}</span>
                  <span>{data.justificativa}</span>
                </p>
              </button>);
          })}

        </div>
      </div>
    </>
  );
}
export default withAuthenticationRequired(GestorTurmas, {
  onRedirecting: () => <Loading />,
});

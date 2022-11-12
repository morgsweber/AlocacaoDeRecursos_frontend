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
    },
    {
      "discipline" : "disciplina2",
      "teacher" : "professor2",
      "groupId" : "turma2",
      "sala_original" : "sala orginal2",
      "sala_alvo" : "sala alvo2",
      "justificativa": "justificativa2"
    },
    {
      "discipline" : "disciplina3",
      "teacher" : "professor3",
      "groupId" : "turma3",
      "sala_original" : "sala orginal3",
      "sala_alvo" : "sala alvo3",
      "justificativa": "justificativa3"
    }
  ]

  return (
    <>
      <Sidebar />
      <div class="main">
        <div class="header">
          <p>Gerenciamento de Salas</p>
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

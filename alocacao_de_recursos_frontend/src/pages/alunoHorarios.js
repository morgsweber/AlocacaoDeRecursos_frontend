import { withAuthenticationRequired } from "@auth0/auth0-react";
import { useState } from "react";
import Loading from "./loading";
import Modal from "./modais/Modal";
import Sidebar from "./components/sidebar"
import "./pages_css/base.css";
import "./pages_css/professorHorarios.css"

function AlunoHorarios() {
  const [show, setShow] = useState(false)

  const data = [
    { data: "02/08/2022", descricao: "Apresentação disciplina", local: "32/315" },
    { data: "04/08/2022", descricao: "Desenvolvimento", local: "32/315" },
    { data: "09/08/2022", descricao: "Desenvolvimento", local: "32/315" },
  ]

  return (
    <div>
      <Sidebar />

      <div class="main">
        <div class="header">
          Horários
        </div>
        <div>
          <table class="table">
            <tr>
              <th>Data</th>
              <th>Descrição da aula</th>
              <th>Prédio/sala</th>
              <th></th>
            </tr>
            {data.map((val, key) => {
              return (
                <tr key={key}>
                  <td>{val.data}</td>
                  <td>{val.descricao}</td>
                  <td>{val.local}</td>
                </tr>
              )
            })}
          </table>

        </div>
        <Modal onClose={() => setShow(false)} show={show} />
      </div>
    </div>
  );
}
export default withAuthenticationRequired(AlunoHorarios, {
  onRedirecting: () => <Loading />,
});

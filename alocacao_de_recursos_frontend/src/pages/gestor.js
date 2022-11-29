import { withAuthenticationRequired } from "@auth0/auth0-react";
import Loading from "./loading";
import Sidebar from "./components/sidebarGestor"
import "./pages_css/base.css";
import "./pages_css/gestor.css";

function Gestor() {
  return (
    <div>
      <Sidebar />
      <div class="main">
        <div class="header">
          <p>Gerenciamento de Salas</p>
        </div>

        <div class="longdiv">
          <div class="info">
            <div class="b0">
              Disciplina: Prática em Eng. de Software
              <br />
              Trocar Sala por Lab
              <br />
              Justificativa: XXXXXXX
            </div>
          </div>

          <div class="info">
            <div class="b0">
            Azriel Mjdenbaum
            </div>
          </div>

          <div class="info">
            <div class="b0">
            Turma 30
            </div>
          </div>

          <div class="info">
            <button class="b1">Y</button>
          </div>
          
          <div class="info">
            <button class="b1">N</button>
          </div>

        </div>

      </div>
    </div>
  );
}
export default withAuthenticationRequired(Gestor, {
  onRedirecting: () => <Loading />,
});

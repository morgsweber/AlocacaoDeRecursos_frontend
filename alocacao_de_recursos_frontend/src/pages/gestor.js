import { withAuthenticationRequired } from "@auth0/auth0-react";
import Loading from "./loading";
import Sidebar from "./components/sidebarGestor"
import "./pages_css/base.css";

function Gestor() {
  return (
    <div>
      <Sidebar />
      <div class="main">
        <div class="header">
          <p>Gerenciamento de Salas</p>
        </div>


      </div>
    </div>
  );
}
export default withAuthenticationRequired(Gestor, {
  onRedirecting: () => <Loading />,
});

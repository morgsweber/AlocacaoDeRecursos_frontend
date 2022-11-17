import { withAuthenticationRequired } from "@auth0/auth0-react";
import Loading from "./loading";
import Sidebar from "./components/sidebarAluno"
import "./pages_css/base.css";

function AlunoTurmas() {
  return (
    <div>
      <Sidebar />
      <div class="main">
        <div class="header">
          <p>Disciplinas</p>
        </div>


      </div>
    </div>
  );
}
export default withAuthenticationRequired(AlunoTurmas, {
  onRedirecting: () => <Loading />,
});

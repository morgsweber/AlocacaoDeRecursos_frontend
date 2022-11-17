import { withAuthenticationRequired } from "@auth0/auth0-react";
import Loading from "./loading";
import Sidebar from "./components/sidebarAluno"
import "./pages_css/base.css";

function AlunoHorarios() {
  return (
    <div>
      <Sidebar />
      <div class="main">
        <div class="header">
          <p>Grade Horária</p>
        </div>


      </div>
    </div>
  );
}
export default withAuthenticationRequired(AlunoHorarios, {
  onRedirecting: () => <Loading />,
});

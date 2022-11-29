import { withAuthenticationRequired } from "@auth0/auth0-react";
import Loading from "./loading";
import Sidebar from "./components/sidebar"
import "./pages_css/base.css";

function AlunoCronograma() {
  return (
    <div>
      <Sidebar />
      <div class="main">
        <div class="header">
          <p>Horários</p>
        </div>


      </div>
    </div>
  );
}
export default withAuthenticationRequired(AlunoCronograma, {
  onRedirecting: () => <Loading />,
});

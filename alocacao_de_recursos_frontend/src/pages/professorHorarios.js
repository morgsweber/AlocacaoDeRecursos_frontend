import { withAuthenticationRequired } from "@auth0/auth0-react";
import { useState } from "react";
import Loading from "./loading";
import Modal from "./modais/Modal";
import Sidebar from "./components/sidebar"
import "./pages_css/base.css";

function ProfessorHorarios() {
  const [show, setShow] = useState(false)

  return (
    <div>
      <Sidebar />

      <div class="main">
        <div class="header">
          <p>Grade Horária</p>
        </div>

        <div class="ProfessorHorarios">
          <h2>ProfessorHorarios</h2>
          <button onClick={() => setShow(true) }> Show modal </button>
        </div>
        <Modal onClose = {() => setShow(false)} show={show} />
      </div>
    </div>
  );
}
export default withAuthenticationRequired(ProfessorHorarios, {
  onRedirecting: () => <Loading />,
});

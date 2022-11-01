import { withAuthenticationRequired } from "@auth0/auth0-react";
import { useState } from "react";
import Loading from "./loading";
import Modal from "./modais/Modal";

function ProfessorHorarios() {
  const [show, setShow] = useState(false)

  return (
    <div>
      <div class="ProfessorHorarios">
        <h2>ProfessorHorarios</h2>
        <button onClick={() => setShow(true) }> Show modal </button>
      </div>
      <Modal onClose = {() => setShow(false)} show={show} />
    </div>
  );
}
export default withAuthenticationRequired(ProfessorHorarios, {
  onRedirecting: () => <Loading />,
});

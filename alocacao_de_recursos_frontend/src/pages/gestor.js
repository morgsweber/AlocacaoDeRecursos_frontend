import { withAuthenticationRequired } from "@auth0/auth0-react";
import Loading from "./loading";
import { useState } from "react";
import ModalRecusarTroca from "./modais/ModalRecusarTroca";

function Gestor() {
  const [show, setShow] = useState(false)
  return (
    <div> 
      <div class="Gestor">
        <h2>Gestor</h2>
        <button onClick={() => setShow(true) }> Show modal </button>
      </div>
      <ModalRecusarTroca onClose = {() => setShow(false)} show={show} />
    </div>
  );
}
export default withAuthenticationRequired(Gestor, {
  onRedirecting: () => <Loading />,
});

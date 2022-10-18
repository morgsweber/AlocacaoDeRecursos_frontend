import { withAuthenticationRequired } from "@auth0/auth0-react";
import Loading from "./loading";

function GestorTurmas() {
  return (
    <div class="GestorTurmas">
      <h2>Gestor/Turmas</h2>
    </div>
  );
}
export default withAuthenticationRequired(GestorTurmas, {
  onRedirecting: () => <Loading />,
});

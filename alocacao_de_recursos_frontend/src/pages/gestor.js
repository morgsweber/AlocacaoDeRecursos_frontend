import { withAuthenticationRequired } from "@auth0/auth0-react";
import Loading from "./loading";

function Gestor() {
  return (
    <div class="Gestor">
      <h2>Gestor</h2>
    </div>
  );
}
export default withAuthenticationRequired(Gestor, {
  onRedirecting: () => <Loading />,
});

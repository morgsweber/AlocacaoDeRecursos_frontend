import { withAuthenticationRequired } from "@auth0/auth0-react";
import Loading from "../pages/loading";

function Disciplinas() {
  return (
    <div class="Disciplinas">
      <h2>Disciplinas</h2>
    </div>
  );
}
export default withAuthenticationRequired(Disciplinas, {
  onRedirecting: () => <Loading />,
});

import { withAuthenticationRequired } from "@auth0/auth0-react";
import Loading from "./loading";

function AlunoHorarios() {
  return (
    <div class="AlunoHorarios">
      <h2>AlunoHorarios</h2>
    </div>
  );
}
export default withAuthenticationRequired(AlunoHorarios, {
  onRedirecting: () => <Loading />,
});

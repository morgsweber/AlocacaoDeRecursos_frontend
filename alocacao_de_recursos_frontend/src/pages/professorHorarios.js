import { withAuthenticationRequired } from "@auth0/auth0-react";
import Loading from "./loading";

function ProfessorHorarios() {
  return (
    <div class="ProfessorHorarios">
      <h2>ProfessorHorarios</h2>
    </div>
  );
}
export default withAuthenticationRequired(ProfessorHorarios, {
  onRedirecting: () => <Loading />,
});

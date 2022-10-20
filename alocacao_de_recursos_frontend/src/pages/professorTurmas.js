import { withAuthenticationRequired } from "@auth0/auth0-react";
import Loading from "./loading";

function ProfessorTurmas() {
  return (
    <div class="ProfessorTurmas">
      <h2>ProfessorTurmas</h2>
    </div>
  );
}
export default withAuthenticationRequired(ProfessorTurmas, {
  onRedirecting: () => <Loading />,
});

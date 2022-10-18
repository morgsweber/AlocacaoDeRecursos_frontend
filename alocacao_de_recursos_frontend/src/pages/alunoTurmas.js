import { withAuthenticationRequired } from "@auth0/auth0-react";
import Loading from "./loading";

function AlunoTurmas() {
  return (
    <div class="AlunoTurmas">
      <h2>AlunoTurmas</h2>
    </div>
  );
}
export default withAuthenticationRequired(AlunoTurmas, {
  onRedirecting: () => <Loading />,
});

import { withAuthenticationRequired } from "@auth0/auth0-react";
import Loading from "../pages/loading";

function Aluno() {
  return (
    <div class="Aluno">
      <h2>Aluno</h2>
    </div>
  );
}
export default withAuthenticationRequired(Aluno, {
  onRedirecting: () => <Loading />,
});

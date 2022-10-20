import { withAuthenticationRequired } from "@auth0/auth0-react";
import Loading from "./loading";

function ProfessorCronograma() {
  return (
    <div class="ProfessorCronograma">
      <h2>ProfessorCronograma</h2>
    </div>
  );
}
export default withAuthenticationRequired(ProfessorCronograma, {
  onRedirecting: () => <Loading />,
});

import { withAuthenticationRequired } from "@auth0/auth0-react";
import Loading from "./loading";

function AlunoCronograma() {
  return (
    <div class="AlunoCronograma">
      <h2>AlunoCronograma</h2>
    </div>
  );
}
export default withAuthenticationRequired(AlunoCronograma, {
  onRedirecting: () => <Loading />,
});

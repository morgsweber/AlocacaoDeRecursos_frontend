import { withAuthenticationRequired } from "@auth0/auth0-react";
import Loading from "../pages/loading";

function Professor() {
  return (
    <div class="Professor">
      <h2>Professor</h2>
    </div>
  );
}
export default withAuthenticationRequired(Professor, {
  onRedirecting: () => <Loading />,
});

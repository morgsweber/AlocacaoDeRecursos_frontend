import { withAuthenticationRequired } from "@auth0/auth0-react";
import Loading from "../pages/loading";

function Adm() {
  return (
    <div class="Adm">
      <h2>Adm</h2>
    </div>
  );
}
export default withAuthenticationRequired(Adm, {
  onRedirecting: () => <Loading />,
});

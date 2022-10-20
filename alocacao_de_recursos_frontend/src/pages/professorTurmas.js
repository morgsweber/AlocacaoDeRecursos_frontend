import { withAuthenticationRequired } from "@auth0/auth0-react";
import Loading from "./loading";
import Header from "./components/professorTurmasHeader";
import Footer from "./components/professorTurmasFooter";

function ProfessorTurmas() {
  return (
    <div class="ProfessorTurmas">
      <Header />
      <h2>ProfessorTurmas</h2>
      <Footer />
    </div>
  );
}
export default withAuthenticationRequired(ProfessorTurmas, {
  onRedirecting: () => <Loading />,
});

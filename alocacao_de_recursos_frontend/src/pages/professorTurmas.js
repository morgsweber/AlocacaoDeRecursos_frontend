import { withAuthenticationRequired } from "@auth0/auth0-react";
import Loading from "./loading";
import Header from "./components/professorTurmasHeader";
import Footer from "./components/professorTurmasFooter";
import "./pages_css/professorTurmas.css";

function ProfessorTurmas() {
  console.log("aqui2" + document.querySelector("main-turmas"));
  var count = 0;
  const turmasArray = ["turma1", "turma2", "turma3", "turma4", "turma5", "turma6"];
  const mainEl = document.querySelector('main-turmas');
  
  

  for(let index = 0; index <turmasArray.length; index++) {
    const turmasContainerEl = document.createElement("button");
    turmasContainerEl.classList.add("turmas-container");
    mainEl.appendChild(turmasContainerEl);
  }

  const turmasContainerEl = document.querySelectorAll(".turmas-container");
  turmasContainerEl.forEach((turmasContainerEl) => {
    turmasContainerEl.innerText = turmasArray[count];
    count = count + 1;
  })

  return (
    <div>
    <Header />
          <div className="main-turmas">
            <button className="turmas-container">hardcoded</button>
            <button className="turmas-container">hardcoded</button>
            <button className="turmas-container">hardcoded</button>
          </div>
    <Footer />
    </div>
  );
}
export default withAuthenticationRequired(ProfessorTurmas, {
  onRedirecting: () => <Loading />,
});

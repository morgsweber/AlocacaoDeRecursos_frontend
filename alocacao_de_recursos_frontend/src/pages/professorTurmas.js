import { withAuthenticationRequired } from "@auth0/auth0-react";
import Loading from "./loading";
import Sidebar from "./components/sidebar"
import "./pages_css/professorTurmas.css";
import "./pages_css/base.css";

const turmasJson = [
  {
    "discipline" : "egenharia2",
    "teacherName" : "teste2",
    "groupId" : "teste2"
  },
  {
    "discipline" : "egenharia3",
    "teacherName" : "teste3",
    "groupId" : "teste3"
  },
  {
    "discipline" : "egenharia3",
    "teacherName" : "teste3",
    "groupId" : "teste3"
  },
  {
    "discipline" : "egenharia3",
    "teacherName" : "teste3",
    "groupId" : "teste3"
  }
]

export const ProfessorTurmas = () => {
  return (
    <> 
        <Sidebar />
        <div class="main">
          <div class="header">
            <p>Disciplinas</p>
          </div>
          <div class="main-turmas">

            {turmasJson.map((data, key) => {
            return (
              <button key={key} class="turmas-container">
                <p>
                  <span class="f1">{data.discipline}</span>
                  <br/>
                  <span class="f2">Prof: {data.teacherName}</span>
                  <br/>
                  <span class="f2">Turma: {data.groupId}</span>
                </p>
                </button>);
              })}
              
        </div>
      </div>
    </>
    
  );
}

export default withAuthenticationRequired(ProfessorTurmas, {
  onRedirecting: () => <Loading />,
});

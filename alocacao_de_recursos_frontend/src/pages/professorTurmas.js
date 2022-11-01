import { withAuthenticationRequired } from "@auth0/auth0-react";
import Loading from "./loading";
import Header from "./components/professorTurmasHeader";
import Footer from "./components/professorTurmasFooter";
import { useRef, useEffect } from "react";
import "./pages_css/professorTurmas.css";

function ProfessorTurmas() {
  const ref = useRef(null);
  useEffect(() => {
    // 👇️ use a ref (best)
    const el2 = ref.current;
    console.log(el2);

    // 👇️ use document.querySelector()
    // should only be used when you can't set a ref prop on the element
    // (you don't have access to the element)
    const mainEl = document.querySelector("#main-turmas");
    console.log(mainEl);

    var count = 0;
    const turmasArray = [
      "turma1","sala1","prof1",
      "turma2","sala2","prof2",
      "turma3","sala3","prof3",
    ];
    //const mainEl = document.querySelector("#main-turmas");

    for (let index = 0; index < turmasArray.length; index++) {
      if (index%3 === 0){
        const turmasContainerEl = document.createElement("button");
        turmasContainerEl.classList.add("turmas-container");
        mainEl.appendChild(turmasContainerEl);
      }
    }

    const turmasContainerEl = document.querySelectorAll(".turmas-container");
    console.log(turmasContainerEl.length);
    turmasContainerEl.forEach((turmasContainerEl) => {
        turmasContainerEl.innerHTML = `<div class="turmaDetails">` + turmasArray[count] + turmasArray[count + 1] + turmasArray[count + 2] + `</div>`;
        count = count + 3;
    });
  }, []);

  return (
    <div>
      <Header />
      <div
        ref={ref}
        id="main-turmas"
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      ></div>
      <Footer />
    </div>
  );
}
export default withAuthenticationRequired(ProfessorTurmas, {
  onRedirecting: () => <Loading />,
});

import { useContext } from "react";
import { Quizcontext } from "../context/quiz";
import Quiz from "../img/quiz.svg";
import "./Welcome.css";

const Welcome = () => {
  const [quizState, dispatch] = useContext(Quizcontext)
  return (
    <div id="welcome">
      <h2>Seja bem-vindo</h2>
      <p>Clique no botão abaixo para começar:</p>
      <button onClick={() => dispatch({type:"CHANGE_STATE"})}>Iniciar</button>
      <img src={Quiz} alt="Início do Quiz" />
    </div>
  )
}

export default Welcome

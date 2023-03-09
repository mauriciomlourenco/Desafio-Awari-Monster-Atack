import awariLogo from "./awari_logo.webp";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function EndGameScreen() {
  let navigate = useNavigate();

  return (
    <div className="App">
      <h1>PARABÉNS !!</h1>
      <h1>.JOGO FINALIZADO.</h1>
      <button onClick={() => navigate(`/`)} className="baseButton">
        JOGAR NOVAMENTE
      </button>
    </div>
  );
}

export default EndGameScreen;

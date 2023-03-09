import awariLogo from "./awari_logo.webp";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function HomeScreen() {
  let navigate = useNavigate();

  function startGame() {
    navigate(`/game`);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Monster APP</h1>
        <div>
          <button onClick={() => startGame()} className="baseButton">
            INICIAR JOGO
          </button>

          <h3>
            <Link style={{ color: "white" }} to="/setup">
              CONFIGURAÇÕES
            </Link>
          </h3>
        </div>
      </header>
    </div>
  );
}

export default HomeScreen;

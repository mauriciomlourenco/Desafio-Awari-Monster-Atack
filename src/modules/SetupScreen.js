import awariLogo from "./awari_logo.webp";
import React, { useEffect, useContext, useState } from "react";
import { Link } from "react-router-dom";
import {
  buildGame,
  GameSetupContext,
  difficultyMap,
  getIndexOfDifficultyByName
} from "./GameSetupContext";

function SetupScreen() {
  const [gameConfig, setGameConfig] = useContext(GameSetupContext);
  const [phasesQuantity, setPhasesQuantity] = useState(
    gameConfig.phases.length
  );
  const [difficulty, setDifficulty] = useState(gameConfig.difficulty);

  useEffect(() => {
    function updateGame() {
      const game = buildGame(difficulty, phasesQuantity);
      setGameConfig(game);
    }

    updateGame();
  }, [difficulty, phasesQuantity, setGameConfig]);

  function increaseDifficulty() {
    const indexOfDifficulty = getIndexOfDifficultyByName(difficulty.name);

    if (indexOfDifficulty >= difficultyMap.length - 1) {
      alert("Esse já é o maior nível permitido");
    } else {
      let newDifficultyIndex = indexOfDifficulty + 1;
      setDifficulty(difficultyMap[newDifficultyIndex]);
    }
  }

  function decreaseDifficulty() {
    const indexOfDifficulty = getIndexOfDifficultyByName(difficulty.name);

    if (indexOfDifficulty === 0) {
      alert("Esse já é o menor nível permitido");
    } else {
      let newDifficultyIndex = indexOfDifficulty - 1;
      setDifficulty(difficultyMap[newDifficultyIndex]);
    }
  }

  function decreasePhasesQuantity() {
    if (phasesQuantity > 1) {
      setPhasesQuantity(phasesQuantity - 1);
    } else {
      alert("Você não pode ter menos de 1 fase no jogo");
    }
  }

  return (
    <div className="App">
      <img src={awariLogo} alt="logo" />
      <h1>Monster APP</h1>
      <h1>CONFIGURAÇÕES</h1>

      <Link style={{ color: "white" }} to="/">
        VOLTAR
      </Link>
      <div>
        <h3>Quantidade de Fases</h3>
        <h3>{phasesQuantity}</h3>
        <button
          onClick={() => decreasePhasesQuantity()}
          className="attackButton"
        >
          -
        </button>
        <button
          onClick={() => setPhasesQuantity(phasesQuantity + 1)}
          className="attackButton"
        >
          +
        </button>
      </div>

      <div>
        <h3>Nível do Jogo</h3>
        <h3>{difficulty.name}</h3>
        <button onClick={() => decreaseDifficulty()} className="attackButton">
          -
        </button>
        <button onClick={() => increaseDifficulty()} className="attackButton">
          +
        </button>
      </div>
    </div>
  );
}

export default SetupScreen;

import React, { useState, useEffect, useContext } from "react";
import PhaseScreen from "./PhaseScreen";
import { GameSetupContext } from "./GameSetupContext";
import { useNavigate } from "react-router-dom";

function GameScreen() {
  const [currentPhaseNumber, setCurrentPhaseNumber] = useState(0);

  const [gameConfig] = useContext(GameSetupContext);

  let navigate = useNavigate();

  function nextLevel() {
    const phasesQuantity = gameConfig.phases.length - 1;
    if (currentPhaseNumber >= phasesQuantity) {
      setCurrentPhaseNumber(0);
    } else {
      setCurrentPhaseNumber(currentPhaseNumber + 1);
    }
  }

  function gameIsFinishedVerifier() {
    const phasesQuantity = gameConfig.phases.length - 1;
    var gameIsFinished = currentPhaseNumber === phasesQuantity;

    if (gameIsFinished) {
      navigate(`/endgame`);
    }
  }

  useEffect(() => {
    gameIsFinishedVerifier();
  }, [currentPhaseNumber]);

  return (
    <PhaseScreen
      phaseData={gameConfig.phases[currentPhaseNumber]}
      onFinishLevel={() => nextLevel()}
    />
  );
}

export default GameScreen;

import "./styles.css";
import GameScreen from "./modules/GameScreen";
import SetupScreen from "./modules/SetupScreen";
import HomeScreen from "./modules/HomeScreen";
import EndGameScreen from "./modules/EndGameScreen";
import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GameSetupContext, difficultyMap } from "./modules/GameSetupContext";
import {
  gameDefaultPhases
  // buildGameDefaultPhases
} from "./modules/GameSetupContext";

import { loadMonsters } from "./modules/GameService";

function App() {
  const [gameConfig, setGameConfig] = useState({
    difficulty: difficultyMap[1],
    phases: gameDefaultPhases
  });

  useEffect(() => {
    function addDefaultConfig(monsters) {
      setGameConfig({
        difficulty: difficultyMap[1],
        phases: gameDefaultPhases
      });
    }

    async function load() {
      const data = await loadMonsters();
    }

    load();
  });

  return (
    <div className="App">
      <GameSetupContext.Provider value={[gameConfig, setGameConfig]}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="game" element={<GameScreen />} />
            <Route path="setup" element={<SetupScreen />} />
            <Route path="endgame" element={<EndGameScreen />} />
          </Routes>
        </BrowserRouter>
      </GameSetupContext.Provider>
    </div>
  );
}

export default App;

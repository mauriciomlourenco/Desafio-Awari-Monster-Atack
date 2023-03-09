import { createContext } from "react";

export const difficultyMap = [
  {
    multiplierForMonsterLife: 1,
    name: "EASY"
  },
  {
    multiplierForMonsterLife: 2,
    name: "MEDIUM"
  },
  {
    multiplierForMonsterLife: 3,
    name: "HARD"
  }
];

export const GameSetupContext = createContext("gamesetup");

export const getIndexOfDifficultyByName = (difficultyName) => {
  return difficultyMap.findIndex((object) => {
    return object.name === difficultyName;
  });
};

function getRandomColor() {
  let maxVal = 0xffffff;
  let randomNumber = Math.random() * maxVal;
  randomNumber = Math.floor(randomNumber);
  let randColor = randomNumber.toString(16);

  return randColor;
}

const buildPhase = (identifier, difficulty) => {
  const monsterName = `Monstro X${identifier} `;

  return {
    number: identifier,
    monster: {
      name: monsterName,
      lifeQuantity: identifier * 7 * difficulty.multiplierForMonsterLife,
      imageUrl: `https://via.placeholder.com/250.png/${getRandomColor()}/FFFFFF/?text=${monsterName}`
    }
  };
};

const initialDifficulty = difficultyMap[1];

export const gameDefaultPhases = [
  buildPhase(1, initialDifficulty),
  buildPhase(2, initialDifficulty),
  buildPhase(3, initialDifficulty),
  buildPhase(4, initialDifficulty),
  buildPhase(5, initialDifficulty)
];

export const buildGameDefaultPhases = async () => {
  // const images = getImages();

  return gameDefaultPhases;
};

export const buildGame = (difficulty, phasesQuantity) => {
  let gamePhases = [];
  for (let index = 1; index <= phasesQuantity + 1; index++) {
    const phase = buildPhase(index, difficulty);
    gamePhases.push(phase);
  }

  return {
    difficulty,
    phases: gamePhases
  };
};

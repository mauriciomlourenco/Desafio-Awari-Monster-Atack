import React, { useState, useEffect } from "react";

const attacksDamageMap = {
  ESPADA: 5,
  MACHADO: 10,
  MAGIA: 15
};

function PhaseScreen({ phaseData, onFinishLevel }) {
  const [monsterLifeQuantity, setMonsterLifeQuantity] = useState(
    phaseData.monster.lifeQuantity
  );

  useEffect(() => {
    setMonsterLifeQuantity(phaseData.monster.lifeQuantity);
  }, [phaseData]);

  function attack(type) {
    var damage = attacksDamageMap[type];

    setMonsterLifeQuantity(monsterLifeQuantity - damage);
  }

  function monsterIsDead() {
    return monsterLifeQuantity <= 0;
  }

  return (
    <div>
      <h1>Level {phaseData.number}</h1>

      <img src={phaseData.monster.imageUrl} alt="logo" />
      <h3>{phaseData.monster.name}</h3>

      {monsterIsDead() ? (
        <div>
          <h3>PARABÉNS!!</h3>
          <h3>VOCÊ CONSEGUIU MATAR O MONSTRO !! </h3>
          <button onClick={() => onFinishLevel()} className="continueButton">
            CONTINUAR
          </button>
        </div>
      ) : (
        <div>
          <h3>VIDA ATUAL: {monsterLifeQuantity}</h3>
          <div>
            <p>ATACAR COM:</p>
            <button onClick={() => attack("ESPADA")} className="attackButton">
              ESPADA (5)
            </button>
            <button onClick={() => attack("MACHADO")} className="attackButton">
              MACHADO (10)
            </button>
            <button onClick={() => attack("MAGIA")} className="attackButton">
              MAGIA (15)
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default PhaseScreen;

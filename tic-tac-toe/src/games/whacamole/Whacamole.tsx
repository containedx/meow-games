import React, { useState, useEffect } from "react";
import {
  NUM_HOLES,
  MOLE_INTERVAL,
  createInitialState,
  pickRandomHole,
  whackMole,
  GameState,
} from "./logic/WhacamoleLogic";
import "./whacamole.css";

const WhacAMole = () => {
  const [state, setState] = useState<GameState>(createInitialState);

  useEffect(() => {
    const interval = setInterval(() => {
      setState(prev => ({ ...prev, moleIndex: pickRandomHole() }));
    }, MOLE_INTERVAL);

    return () => clearInterval(interval);
  }, []);

  const handleClick = (index: number) => {
    setState(prev => whackMole(prev, index));
  };

  return (
    <div className="whac-container">
      <h1>Whac-A-Mole 🐹</h1>
      <p>Score: {state.score}</p>

      <div className="whac-grid">
        {Array.from({ length: NUM_HOLES }).map((_, i) => (
          <div
            key={i}
            onClick={() => handleClick(i)}
            className={`whac-hole ${i === state.moleIndex ? "mole" : ""}`}
          />
        ))}
      </div>
    </div>
  );
};

export default WhacAMole;

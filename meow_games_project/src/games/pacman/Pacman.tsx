import React, { useState, useEffect } from 'react';
import { PacmanState, movePacman } from './logic/PacmanLogic';
import { generateMaze } from './logic/maze'; 
import './pacman.css';

const Pacman = () => {
  const [state, setState] = useState<PacmanState>({
    x:1, y:1, dir:null, score:0, maze: generateMaze()
  });

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      let dir: PacmanState['dir'] = null;
      if (e.key === 'ArrowUp') dir = 'UP';
      if (e.key === 'ArrowDown') dir = 'DOWN';
      if (e.key === 'ArrowLeft') dir = 'LEFT';
      if (e.key === 'ArrowRight') dir = 'RIGHT';
      if (dir) setState(s => ({ ...s, dir }));
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setState(s => movePacman(s));
    }, 200);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="maze">
      {state.maze.map((row, y) => ( 
        <div key={y} className="row">
          {row.map((cell, x) => {
            let className = 'cell';
            if (cell === 1) className += ' wall';
            else if (cell === 2) className += ' dot';
            if (x === state.x && y === state.y) className += ' pacman';
            return <div key={x} className={className}></div>;
          })}
        </div>
      ))}
      <div className="score">Score: {state.score}</div>
    </div>
  );
};


export default Pacman;

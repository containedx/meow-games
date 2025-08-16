import React from 'react';
import { Player } from '../logic/GameLogic';

interface GameInfoProps {
  currentPlayer: Player;
  winner: Player;
  cells: Player[];
}

const GameInfo = ({ currentPlayer, winner, cells }: GameInfoProps) => {

  const allFilled = cells.every(cell => cell);

  if (winner) return <p>{winner} wins! 🎉</p>;
  else if (allFilled) return <p>It’s a draw! 🤝</p>;
  return <p>It is now {currentPlayer}'s turn</p>;
};

export default GameInfo;

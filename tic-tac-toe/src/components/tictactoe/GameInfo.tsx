import React from 'react';
import { Player } from './GameLogic';

interface GameInfoProps {
  currentPlayer: Player;
  winner: Player;
}

const GameInfo = ({ currentPlayer, winner }: GameInfoProps) => {
  if (winner) return <p>{winner} wins! 🎉</p>;
  return <p>It is now {currentPlayer}'s turn</p>;
};

export default GameInfo;

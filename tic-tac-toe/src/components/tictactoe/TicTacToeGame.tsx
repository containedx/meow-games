import React, { useState, useEffect } from 'react';
import Board from './GameBoard';
import GameInfo from './GameInfo';
import { initialBoard, Player, checkWinner } from './GameLogic';

const TicTacToe = () => {
  const [cells, setCells] = useState<Player[]>(initialBoard);
  const [currentPlayer, setCurrentPlayer] = useState<Player>("circle");
  const [winner, setWinner] = useState<Player>("");

  useEffect(() => {
    const win = checkWinner(cells);
    if (win) setWinner(win);
  }, [cells]);

  const handleCellClick = (index: number) => {
    if (cells[index] || winner) return;

    const newCells = [...cells];
    newCells[index] = currentPlayer;
    setCells(newCells);

    setCurrentPlayer(currentPlayer === "circle" ? "cross" : "circle");
  };

  return (
    <div className="app">
      <Board cells={cells} onCellClick={handleCellClick} />
      <GameInfo currentPlayer={currentPlayer} winner={winner} />
    </div>
  );
};

export default TicTacToe;

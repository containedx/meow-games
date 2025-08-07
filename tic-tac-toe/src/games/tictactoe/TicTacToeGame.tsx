import React, { useState, useEffect } from 'react';
import Board from './components/GameBoard';
import GameInfo from './components/GameInfo';
import { initialBoard, Player, checkWinner } from './logic/GameLogic';
import './tictactoe.css';

const TicTacToe = () => {
  const [cells, setCells] = useState<Player[]>(initialBoard);
  const [currentPlayer, setCurrentPlayer] = useState<Player>("cat");
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

    setCurrentPlayer(currentPlayer === "cat" ? "dog" : "cat");
  };

  return (
    <div className='tictactoe_main'>
      <Board cells={cells} onCellClick={handleCellClick} />
      <GameInfo currentPlayer={currentPlayer} winner={winner} />
    </div>
  );
};

export default TicTacToe;

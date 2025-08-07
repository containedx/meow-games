import React from 'react';
import Cell from './Cell';
import { Player } from '../logic/GameLogic';
import './gameboard.css';

interface BoardProps {
  cells: Player[];
  onCellClick: (index: number) => void;
}

const Board = ({ cells, onCellClick }: BoardProps) => {
  return (
    <div className="gameboard">
      {cells.map((cell, i) => (
        <Cell key={i} value={cell} onClick={() => onCellClick(i)} />
      ))}
    </div>
  );
};

export default Board;

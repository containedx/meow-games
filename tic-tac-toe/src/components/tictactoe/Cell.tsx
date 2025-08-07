import React from 'react';
import { Player } from './GameLogic';

interface CellProps {
  value: Player;
  onClick: () => void;
}

const Cell = ({ value, onClick }: CellProps) => {
  return (
    <div className="square" onClick={onClick}>
      <div className={value}></div>
    </div>
  );
};

export default Cell;

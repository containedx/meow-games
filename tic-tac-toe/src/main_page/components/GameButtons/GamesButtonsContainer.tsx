import GameButton from "./GameButton";
import './gamebuttonscontainer.css';


const GameButtonsContainer = () => {
  return (
    <div className = "gamebuttoncontainer">
      <GameButton label="cat vs dog"/>
    </div>
  );
};

export default GameButtonsContainer;

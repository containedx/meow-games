import GameButton from "./GameButton";
import './gamebuttonscontainer.css';

interface GameButtonsContainerProps {
  onClickGameButton: (gameId: string) => void;
};

const GameButtonsContainer = ({onClickGameButton} : GameButtonsContainerProps) => {
  return (
    <div className = "gamebuttoncontainer">

      <GameButton 
        label="cat vs dog"
        gameid="tictactoe"
        onClickGameButton={onClickGameButton}
      />

      <GameButton 
        label="tictactoe"
        gameid="tictactoe"
        onClickGameButton={onClickGameButton}
      />

      <GameButton 
        label="tictactoe"
        gameid="tictactoe"
        onClickGameButton={onClickGameButton}
      />

      <GameButton 
        label="tictactoe"
        gameid="tictactoe"
        onClickGameButton={onClickGameButton}
      />

    </div>
  );
};

export default GameButtonsContainer;

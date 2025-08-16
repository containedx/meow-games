import GameButton from "./GameButton";
import './gamebuttonscontainer.css';

import tictactoe_image from "../../assets/tictactoebutton.png";
import whacamole_image from "../../assets/whacamole_button.webp";


interface GameButtonsContainerProps {
  onClickGameButton: (gameId: string) => void;
};

const GameButtonsContainer = ({onClickGameButton} : GameButtonsContainerProps) => {
  return (
    <div className = "gamebuttoncontainer">

      <GameButton 
        label="cat vs dog"
        gameid="tictactoe"
        image={tictactoe_image}
        onClickGameButton={onClickGameButton}
      />

      <GameButton 
        label="whacamole"
        gameid="whacamole"
        image={whacamole_image}
        onClickGameButton={onClickGameButton}
      />

      <GameButton 
        label="tictactoe"
        gameid="tictactoe"
        image={tictactoe_image}
        onClickGameButton={onClickGameButton}
      />

      <GameButton 
        label="tictactoe"
        gameid="tictactoe"
        image={tictactoe_image}
        onClickGameButton={onClickGameButton}
      />

    </div>
  );
};

export default GameButtonsContainer;

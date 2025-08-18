import GameButton from "./GameButton";
import './gamebuttonscontainer.css';

import tictactoe_image from "../../assets/tictactoebutton.png";
import whacamole_image from "../../assets/whacamole_button.webp";
import pacman_image from "../../assets/pacman_button.webp";
import dino_image from "../../assets/dino_button.webp"


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
        label="pacman"
        gameid="pacman"
        image={pacman_image}
        onClickGameButton={onClickGameButton}
      />

      <GameButton 
        label="dino"
        gameid="dino"
        image={dino_image}
        onClickGameButton={onClickGameButton}
      />

    </div>
  );
};

export default GameButtonsContainer;

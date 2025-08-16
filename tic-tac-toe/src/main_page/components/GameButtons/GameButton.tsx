import './gamebutton.css';

interface GameButtonProps{
    label: string,
    gameid: string,
    onClickGameButton: (gameId: string) => void;
}

const GameButton = ({ label, gameid, onClickGameButton }: GameButtonProps) => {
  return (
    <div className = "gamebutton" onClick={() => onClickGameButton(gameid)}>
      <h1></h1>
    </div>
  );
};

export default GameButton;
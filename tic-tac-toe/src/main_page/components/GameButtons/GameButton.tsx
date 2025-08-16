import './gamebutton.css';

interface GameButtonProps{
    label: string,
    gameid: string,
    image: string;
    onClickGameButton: (gameId: string) => void;
}

const GameButton = ({ label, gameid, image, onClickGameButton }: GameButtonProps) => {
  return (
    <div className="gamebutton" onClick={() => onClickGameButton(gameid)}>
      <img src={image} alt={label} className="gamebutton-img" />
    </div>
  );
};

export default GameButton;
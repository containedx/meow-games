import './gamebutton.css';

interface GameButtonProps{
    label: string
}

const GameButton = ({ label }: GameButtonProps) => {
  return (
    <div className = "gamebutton">
      <h1>{label}</h1>
    </div>
  );
};

export default GameButton;
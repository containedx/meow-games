import { useState } from 'react';

import TicTacToe from "./games/tictactoe/TicTacToeGame";
import GameButtonsContainer from "./main_page/components/GameButtons/GamesButtonsContainer";
import PufferFish from './main_page/components/Decorations/PufferFish';
import Music from './main_page/components/Decorations/Music';


function App() {

  const [selectedGame, setSelectedGame] = useState<string | null>(null);

  const goBack = () => setSelectedGame(null);

  return (
    <div className="app">

      <video autoPlay loop muted playsInline className="bg-video">
        <source src="/main_page_background_video.mp4" type="video/mp4" />
      </video>

      <Music/>


      {selectedGame === "tictactoe" ? (
        <div>
          <button className="back-button" onClick={goBack}></button>
          <TicTacToe />
        </div>
      ) : (
        <GameButtonsContainer onClickGameButton={setSelectedGame} />
      )}
      
    </div>
  );

}

export default App;

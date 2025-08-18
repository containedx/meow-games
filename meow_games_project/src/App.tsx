import React, { useState } from 'react';

import TicTacToe from "./games/tictactoe/TicTacToeGame";
import WhacAMole from './games/whacamole/Whacamole';
import Pacman from './games/pacman/Pacman';

import GameButtonsContainer from "./main_page/components/GameButtons/GamesButtonsContainer";
import PufferFish from './main_page/components/Decorations/PufferFish';
import Music from './main_page/components/Decorations/Music';



const games: Record<string, React.ReactNode> = {
    tictactoe: <TicTacToe />,
    whacamole: <WhacAMole />,
    pacman: <Pacman />
};


function App() {

  const [selectedGame, setSelectedGame] = useState<string | null>(null);

  const goBack = () => setSelectedGame(null);

  

  return (
    <div className="app">

      <video autoPlay loop muted playsInline className="bg-video">
        <source src={process.env.PUBLIC_URL + "/main_page_background_video.mp4"} type="video/mp4" />
      </video>

      <Music/>


      {selectedGame ? (
        <div>
          <button className="back-button" onClick={goBack}></button>
          {games[selectedGame]}
        </div>
      ) : (
        <GameButtonsContainer onClickGameButton={setSelectedGame} />
      )}
      
    </div>
  );

}

export default App;

import { useState } from 'react';

import TicTacToe from "./games/tictactoe/TicTacToeGame";
import GameButtonsContainer from "./main_page/components/GameButtons/GamesButtonsContainer";


function App() {

  const [selectedGame, setSelectedGame] = useState<string | null>(null);

  const goBack = () => setSelectedGame(null);

  return (
    <div className="app">
      {selectedGame === "tictactoe" ? (
        <div>
          <button className="back-button" onClick={goBack}>BACK</button>
          <TicTacToe />
        </div>
      ) : (
        <GameButtonsContainer onClickGameButton={setSelectedGame} />
      )}
    </div>
  );

}

export default App;

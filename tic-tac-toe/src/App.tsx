import { useState } from 'react';

import TicTacToe from "./games/tictactoe/TicTacToeGame";
import GameButtonsContainer from "./main_page/components/GameButtons/GamesButtonsContainer";


function App() {

  const [selectedGame, setSelectedGame] = useState<string | null>(null);

  return (
    <div className="app">
      {selectedGame === "tictactoe" ? (
        <TicTacToe />
      ) : (
        <GameButtonsContainer onClickGameButton={setSelectedGame} />
      )}
    </div>
  );

}

export default App;

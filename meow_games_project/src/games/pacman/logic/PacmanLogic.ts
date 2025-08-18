import { generateMaze } from './maze'; // CHANGED

export type Direction = 'UP' | 'DOWN' | 'LEFT' | 'RIGHT' | null;

export interface PacmanState {
  x: number;
  y: number;
  dir: Direction;
  score: number;
  maze: number[][]; 
}

export const movePacman = (state: PacmanState): PacmanState => {
  const { x, y, dir, score, maze } = state;
  let nx = x, ny = y;

  switch(dir) {
    case 'UP': ny--; break;
    case 'DOWN': ny++; break;
    case 'LEFT': nx--; break;
    case 'RIGHT': nx++; break;
  }

  const newMaze = maze.map(row => [...row]);
  let newScore = score;

  if (newMaze[ny] && newMaze[ny][nx] !== 1) {
    if (newMaze[ny][nx] === 2) {
      newMaze[ny][nx] = 0;
      newScore += 10;
    }

    const dotsLeft = newMaze.flat().some(cell => cell === 2);
    if (!dotsLeft) {
      return {
        x: 1,
        y: 1,
        dir: null,
        score: newScore,
        maze: generateMaze(), 
      };
    }

    return { x: nx, y: ny, dir, score: newScore, maze: newMaze };
  }

  return state; 
};

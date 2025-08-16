export const NUM_HOLES = 9;
export const MOLE_INTERVAL = 1000; //ms

export interface GameState {
  moleIndex: number | null;
  score: number;
}

export const createInitialState = (): GameState => ({
  moleIndex: null,
  score: 0,
});

export const pickRandomHole = (): number => {
  return Math.floor(Math.random() * NUM_HOLES);
};

export const whackMole = (state: GameState, index: number): GameState => {
  if (index === state.moleIndex) {
    return {
      ...state,
      score: state.score + 1,
      moleIndex: null,
    };
  }
  return state;
};

export type Player = "cat" | "dog" | "";

export const initialBoard: Player[] = Array(9).fill("");

const winningCombos = [
  [0,1,2],[3,4,5],[6,7,8],
  [0,3,6],[1,4,7],[2,5,8],
  [0,4,8],[2,4,6],
];

// Check winner; returns "circle", "cross" or ""
export function checkWinner(cells: Player[]): Player {
  for (const [a,b,c] of winningCombos) {
    if (cells[a] && cells[a] === cells[b] && cells[a] === cells[c]) {
      return cells[a];
    }
  }
  return "";
}

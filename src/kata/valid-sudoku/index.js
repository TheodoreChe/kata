// @flow

/**
 * Sudoku is a game played on a 9x9 grid. The goal of the game is to fill all cells
 * of the grid with digits from 1 to 9,so that each column, each row,
 * and each of the nine 3x3 sub-grids (also known as blocks) contain all of the digits from 1 to 9.
 */

type BoardType = Array<Array<number>>;
type ValidBoardType = (arg: BoardType) => boolean;
type ValidSudokuType = (arg: BoardType) => boolean;
type CloneType = (arg: Array<any>) => Array<any>;
type FlatType = (arg: Array<any>) => Array<any>;

const clone: CloneType = x => JSON.parse(JSON.stringify(x));
const flat: FlatType = x => [].concat(...x);

const validBoards: ValidBoardType = boards => {
  for (let i = 0; i < 9; i += 1) {
    const row = new Set(boards[i]);
    if (row.size !== 9 || row.has(0)) return false;
  }
  return true;
};

export const validSudoku: ValidSudokuType = board => {
  const subGrid = clone(new Array(3).fill(new Array(3).fill([])));
  const rotatedBoard = clone(new Array(9).fill(new Array(9)));
  for (let i = 0; i < 9; i += 1) {
    for (let j = 0; j < 9; j += 1) {
      subGrid[Math.floor(i / 3)][Math.floor(j / 3)].push(board[i][j]);
      rotatedBoard[j][i] = board[i][j];
    }
  }
  return validBoards(board.concat(rotatedBoard).concat(flat(subGrid)));
};

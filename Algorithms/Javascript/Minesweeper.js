// In the popular Minesweeper game you have a board with some mines and those cells that don't contain a mine have a number in it that indicates the total number of mines in the neighboring cells. Starting off with some arrangement of mines we want to create a Minesweeper game setup.

matrix = [[true, false, false],
          [false, true, false],
          [false, false, false]]

function solution(matrix) {
  let board = [];
  for (let i = 0; i < matrix.length; i++) {
    board.push([]);
    for (let j = 0; j < matrix[i].length; j++) {
      board[i][j] = 0;
      // check above
      if (matrix[i][j - 1] === true) {
        board[i][j]++;
      }
      // check below
      if (matrix[i][j + 1] != undefined) {
        if (matrix[i][j + 1] === true) {
          board[i][j]++;
        }
      }
      // check right
      if (matrix[i + 1] != undefined) {
        if (matrix[i + 1][j] === true) {
          board[i][j]++;
        }
      }
      // check left
      if (matrix[i - 1] != undefined) {
        if (matrix[i - 1][j] === true) {
          board[i][j]++;
        }
      }
      // check top right
      if (matrix[i - 1] != undefined) {
        if (matrix[i - 1][j + 1] === true) {
          board[i][j]++;
        }
      }
      // check bottom right
      if (matrix[i + 1] != undefined) {
        if (matrix[i + 1][j + 1] === true) {
          board[i][j]++;
        }
      }
      // check bottom left
      if (matrix[i + 1] != undefined) {
        if (matrix[i + 1][j - 1] === true) {
          board[i][j]++;
        }
      }
      // check top left
      if (matrix[i - 1] != undefined) {
        if (matrix[i - 1][j - 1] === true) {
          board[i][j]++;
        }
      }
    }
  }
  return board;
}

console.log(solution(matrix))
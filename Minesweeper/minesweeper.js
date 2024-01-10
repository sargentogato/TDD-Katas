const BOARD = [
  [1, "*", 1, 0],
  [1, 3, 3, 1],
  [2, "*", "*", 1],
  ["*", 3, 2, 1],
];

class Minesweeper {
  constructor() {
    this.myBoard = [
      [".", ".", ".", "."],
      [".", ".", ".", "."],
      [".", ".", ".", "."],
      [".", ".", ".", "."],
    ];
  }

  returnGame(x, y) {
    if (!x || !y) {
      return this.myBoard;
    }

    let boardPosition = this.returnPosition(x, y);
    if (boardPosition === "*") {
      this.resetGame();
      return "GAME OVER";
    }

    this.myBoard[x - 1][y - 1] = boardPosition;

    return this.myBoard;
  }

  returnPosition(x, y) {
    let result = BOARD[x - 1][y - 1];

    return result;
  }

  resetGame() {
    this.myBoard = [];
    for (let col = 0; col < 4; col++) {
      this.myBoard.push([]);
      for (let row = 0; row < 4; row++) {
        this.myBoard[col].push(".");
      }
    }
  }

  getMyBoard() {
    return this.myBoard;
  }
}

module.exports = Minesweeper;

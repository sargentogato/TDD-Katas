const BOARD = [
  [1, "*", 1, 0],
  [1, 3, 3, 1],
  [2, "*", "*", 1],
  ["*", 3, 2, 1],
];

class Minesweeper {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.myBoard = [];
    this.initGame(x, y);
  }

  returnGame(x, y) {
    if (!x || !y) {
      return this.myBoard;
    }

    let boardPosition = this.returnPosition(x, y);

    if (boardPosition === "*") {
      this.initGame(this.x, this.y);
      return "GAME OVER";
    }

    this.myBoard[x - 1][y - 1] = boardPosition;

    return this.myBoard;
  }

  returnPosition(x, y) {
    let result = BOARD[x - 1][y - 1];

    return result;
  }

  initGame(x, y) {
    this.myBoard = [];
    for (let col = 0; col < y; col++) {
      this.myBoard.push([]);
      for (let row = 0; row < x; row++) {
        this.myBoard[col].push(".");
      }
    }
  }

  getMyBoard() {
    return this.myBoard;
  }
}

module.exports = Minesweeper;

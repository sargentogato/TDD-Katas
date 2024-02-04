const Minesweeper = require("../minesweeper.js");

const Game = new Minesweeper(4, 4);

describe("Minesweeper", () => {
  test("return position axis x=1 and axis y=1", () => {
    // Arranges
    const expectValue = 1;

    // Act
    const result = Game.returnPosition(1, 1);

    // Assert

    expect(result).toBe(expectValue);
  });

  test("return mine when position is axis x=1 and axis y=2", () => {
    // Arranges
    const expectValue = "*";

    // Act
    const result = Game.returnPosition(1, 2);

    // Assert

    expect(result).toBe(expectValue);
  });

  test("return board empty", () => {
    // Arranges
    const expectValue = [
      [".", ".", ".", "."],
      [".", ".", ".", "."],
      [".", ".", ".", "."],
      [".", ".", ".", "."],
    ];

    // Act
    const result = Game.returnGame();

    // Assert
    expect(result).toStrictEqual(expectValue);
  });

  test("return board with positions x:1 / y:1", () => {
    // Arranges
    const expectValue = [
      [1, ".", ".", "."],
      [".", ".", ".", "."],
      [".", ".", ".", "."],
      [".", ".", ".", "."],
    ];

    // Act
    const result = Game.returnGame(1, 1);

    // Assert
    expect(result).toStrictEqual(expectValue);
  });

  test("return board with positions x:1 / y:4", () => {
    // Arranges
    const expectValue = [
      [1, ".", ".", 0],
      [".", ".", ".", "."],
      [".", ".", ".", "."],
      [".", ".", ".", "."],
    ];

    // Act
    const result = Game.returnGame(1, 4);

    // Assert
    expect(result).toStrictEqual(expectValue);
  });

  test("return GAME OVER and board reset when find a mine positions x:4 / y:1", () => {
    // Arranges
    const expectValue = "GAME OVER";
    const expectResetBoard = [
      [".", ".", ".", "."],
      [".", ".", ".", "."],
      [".", ".", ".", "."],
      [".", ".", ".", "."],
    ];

    // Act
    const result = Game.returnGame(4, 1);
    const result2 = Game.getMyBoard();
    // Assert
    expect(result).toBe(expectValue);
    expect(result2).toStrictEqual(expectResetBoard);
  });
});

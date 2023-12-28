const calculatePrice = require("../pottersBook");

describe("Potters Book", () => {
  test("return 0 when no books is purchased", () => {
    //Arrange
    const booksBought = [];
    const priceWithDiscount = 0;

    //Action
    const totalPrice = calculatePrice(booksBought);

    //Assert
    expect(totalPrice).toBe(priceWithDiscount);
  });

  test("return price of one book", () => {
    //Arrange
    const booksBought = [1];
    const priceOnebook = 8;

    //Action
    const totalPrice = calculatePrice(booksBought);

    //Assert
    expect(totalPrice).toBe(priceOnebook);
  });

  test("apply discount when receibe two different books", () => {
    //Arrange
    const booksBought = [1, 2];
    const priceWithDiscount = 15.2;

    //Action
    const totalPrice = calculatePrice(booksBought);

    //Assert
    expect(totalPrice).toBe(priceWithDiscount);
  });

  test("apply discount when receibe three different books", () => {
    //Arrange
    const booksBought = [1, 2, 3];
    const priceWithDiscount = 21.6;

    //Action
    const totalPrice = calculatePrice(booksBought);

    //Assert
    expect(totalPrice).toBe(priceWithDiscount);
  });

  test("apply discount just to a different books", () => {
    //Arrange
    const booksBought = [1, 1, 2, 2];
    const priceWithDiscount = 30.4;

    //Action
    const totalPrice = calculatePrice(booksBought);

    //Assert
    expect(totalPrice).toBe(priceWithDiscount);
  });

  test("apply discount just to a two grup different books", () => {
    //Arrange
    const booksBought = [1, 1, 2, 2];
    const priceWithDiscount = 30.4;

    //Action
    const totalPrice = calculatePrice(booksBought);

    //Assert
    expect(totalPrice).toBe(priceWithDiscount);
  });
});

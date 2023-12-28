const PottersBook = require("../PotterBooks");

describe("Potter Books", () => {
  test("returns price for one copy", () => {
    const book = [1];
    const totalPrice = 8;

    const result = new PottersBook(book).calculatePrice();

    expect(result).toBe(totalPrice);
  });

  test("cambiar texto", () => {
    const book = [1, 1];
    const totalPrice = 16;

    const result = new PottersBook(book).calculatePrice();

    expect(result).toBe(totalPrice);
  });

  //Leer los test y entender qué está sucediendo según el descuento por
  // verbo + when
  test("apply discount when receibe two different copies", () => {
    const books = [1, 2];
    const totalPrice = 15.2;

    const result = new PottersBook(books).calculatePrice();

    expect(result).toBe(totalPrice);
  });

  test("Price for one copy of book 1, 2 and 3", () => {
    const books = [1, 2, 3];
    const totalPrice = 21.6;

    const result = new PottersBook(books).calculatePrice();

    expect(result).toBe(totalPrice);
  });

  test("Price for one copy of book 1, 2, 3 and 4", () => {
    const books = [1, 2, 3, 4];
    const totalPrice = 25.6;

    const result = new PottersBook(books).calculatePrice();

    expect(result).toBe(totalPrice);
  });

  test("Price for one copy of book 1, 2, 3 and 4", () => {
    const books = [1, 2, 3, 4, 5];
    const totalPrice = 30;

    const result = new PottersBook(books).calculatePrice();

    expect(result).toBe(totalPrice);
  });

  test("Price for two copys of book 1, 2, 3 and one copy fo books 4 and 5", () => {
    const books = [1, 1, 2, 2, 3, 3, 4, 5];
    const totalPrice = 51.6;

    const result = new PottersBook(books).calculatePrice();

    expect(result).toBe(totalPrice);
  });

  test("Price for one copy of book 1, 2, 3, 4, 5 and 6", () => {
    const books = [1, 2, 3, 4, 5, 6];
    const totalPrice = 28.8;

    const result = new PottersBook(books).calculatePrice();

    expect(result).toBe(totalPrice);
  });

  test("Price for one copy of book 1, 2, 3, 4, 5, 6 and 7", () => {
    const books = [1, 2, 3, 4, 5, 6, 7];
    const totalPrice = 28;

    const result = new PottersBook(books).calculatePrice();

    expect(result).toBe(totalPrice);
  });

  test("Price for two copies of book 2 and 5, one copy of books 3 and 4", () => {
    const books = [2, 2, 3, 4, 5, 5];
    const totalPrice = 40.8;

    const result = new PottersBook(books).calculatePrice();

    expect(result).toBe(totalPrice);
  });
});

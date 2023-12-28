const { calculatePrice } = require("../PotterBooks2");

describe("Potter Books", () => {
  test.only("returns price for one copy", () => {
    const book = [1];
    const totalPrice = 8;

    const result = calculatePrice(book);

    expect(result).toBe(totalPrice);
  });

  test.only("return price for two equal books", () => {
    const books = [1, 1];
    const totalPrice = 16;

    const result = calculatePrice(books);

    expect(result).toBe(totalPrice);
  });

  //Leer los test.only y entender qué está sucediendo según el descuento por
  // verbo + when
  test.only("apply discount when receibe two different copies", () => {
    const books = [1, 2];
    const totalPrice = 15.2;

    const result = calculatePrice(books);

    expect(result).toBe(totalPrice);
  });

  test.only("return 0 when none books is passed", () => {
    const books = [];
    const totalPrice = 0;

    const result = calculatePrice(books);

    expect(result).toBe(totalPrice);
  });

  test.only("return price when receibe 2 different copies and 1 book more", () => {
    const books = [1, 1, 2];
    const totalPrice = 23.2;

    const result = calculatePrice(books);

    expect(result).toBe(totalPrice);
  });

  test.only("return price when receibe 3 different copies", () => {
    const books = [1, 2, 3];
    const totalPrice = 21.6;

    const result = calculatePrice(books);

    expect(result).toBe(totalPrice);
  });

  //new test.only
  test.only("return price when receibe two copies of two different books", () => {
    const books = [2, 2, 4, 4];
    const totalPrice = 30.4;

    const result = calculatePrice(books);

    expect(result).toBe(totalPrice);
  });

  test.only("return price with discount when receibe 5 different books", () => {
    const books = [1, 2, 3, 4, 5];
    const totalPrice = 30;

    const result = calculatePrice(books);

    expect(result).toBe(totalPrice);
  });

  test.only("retur price when receibe two copies of book 1, 2 and 3", () => {
    const books = [1, 1, 2, 2, 3, 3];
    const totalPrice = 43.2;

    const result = calculatePrice(books);

    expect(result).toBe(totalPrice);
  });

  //Estoy en este test.only
  test.only("return price when receibe two copies of books 1, 2, and 3 and one copy of book 4 ", () => {
    const books = [1, 1, 2, 2, 3, 3, 4];
    const totalPrice = 47.2;

    const result = calculatePrice(books);

    expect(result).toBe(totalPrice);
  });

  test.only("return price when receibe two copies of books 1, 2, and 3 and one copy o books 4 and 5", () => {
    const books = [1, 1, 2, 2, 3, 3, 4, 5];
    const totalPrice = 51.6;

    const result = calculatePrice(books);

    expect(result).toBe(totalPrice);
  });

  test.only("return price when receibe two copies of books 1, 2, and 3 and one copy o books 4, 5, and 6", () => {
    const books = [1, 1, 2, 2, 3, 3, 4, 5, 6];
    const totalPrice = 50.4;

    const result = calculatePrice(books);

    expect(result).toBe(totalPrice);
  });

  test.only("return price when receibe two copies of books 1, 2, 3, and four", () => {
    const books = [1, 1, 2, 2, 3, 3, 4, 4];
    const totalPrice = 51.2;

    const result = calculatePrice(books);

    expect(result).toBe(totalPrice);
  });

  test.only("return price when receibe two copies of books 1, 2, 3, 4 and five", () => {
    const books = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5];
    const totalPrice = 60;

    const result = calculatePrice(books);

    expect(result).toBe(totalPrice);
  });

  test.only("return price when receibe three copies of books 1, 2", () => {
    const books = [1, 1, 1, 2, 2, 2];
    const totalPrice = 45.6;

    const result = calculatePrice(books);

    expect(result).toBe(totalPrice);
  });

  test.only("return price when receibe three copies of books 1, 2, 3", () => {
    const books = [1, 1, 1, 2, 2, 2, 3, 3, 3];
    const totalPrice = 64.8;

    const result = calculatePrice(books);

    expect(result).toBe(totalPrice);
  });

  test.only("return price when receibe two copies of books 1, 2, 3, 4, 5, 6, 7", () => {
    const books = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7];
    const totalPrice = 56;

    const result = calculatePrice(books);

    expect(result).toBe(totalPrice);
  });

  test.only("return price when receibe three copies of same book", () => {
    const books = [2, 2, 2];
    const totalPrice = 24;

    const result = calculatePrice(books);

    expect(result).toBe(totalPrice);
  });

  test.only("return price when receibe one copy of books 1, 2, 3, 4, 5, 6, 7", () => {
    const books = [1, 2, 3, 4, 5, 6, 7];
    const totalPrice = 28;

    const result = calculatePrice(books);

    expect(result).toBe(totalPrice);
  });
});

const { FizzBuzzNumber, fizzBuzz } = require("../fizz-buzz");

describe("FizzBuzz number", () => {
  test("print number when is not FizzBuzz number", () => {
    const numberToTest = 1;

    const result = new FizzBuzzNumber(numberToTest).print();

    expect(result).toBe(numberToTest);
  });

  test("If the number is divisible by 3, write “Fizz” instead", () => {
    const numberToTest = 3;

    const result = new FizzBuzzNumber(numberToTest).print();

    expect(result).toBe("Fizz");
  });

  test("if the numer is 4 print number", () => {
    const numberToTest = 4;

    const result = new FizzBuzzNumber(numberToTest).print();

    expect(result).toBe(numberToTest);
  });

  test("If the number is divisible by 5, write “Buzz” instead", () => {
    const numberToTest = 5;

    const result = new FizzBuzzNumber(numberToTest).print();

    expect(result).toBe("Buzz");
  });

  test("If the number is divisible by both 3 and 5, write “FizzBuzz”", () => {
    const numberToTest = 15;

    const result = new FizzBuzzNumber(numberToTest).print();

    expect(result).toBe("FizzBuzz");
  });

  test("If the number is not divisible neither by 3 nor 5, write the string representation of the number", () => {
    const numberToTest = 16;

    const result = new FizzBuzzNumber(numberToTest).print();

    expect(result).toBe(numberToTest);
  });

  test("A number is fizz if it is divisible by 3 or if it has a 3 in it", () => {
    const numberToTest = 13;

    const result = new FizzBuzzNumber(numberToTest).print();

    expect(result).toBe("Fizz");
  });

  test("A number is buzz if it is divisible by 5 or if it has a 5 in it", () => {
    const numberToTest = 51;

    const result = new FizzBuzzNumber(numberToTest).print();

    expect(result).toBe("Buzz");
  });
});

describe("Fizz Buzz", () => {
  test("Print arra y from 0 to 100", () => {
    const result = fizzBuzz();

    expect(result.length).toEqual(100);
    expect(result[0]).toEqual(1);
  });

  test("Retur a fizz numbers an array of numbers", () => {
    const result = fizzBuzz();

    expect(result[2]).toEqual("Fizz");
  });
});

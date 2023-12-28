const {
  convertNumberToRoman,
  convertArabicNumberToRomanNumber,
} = require("../romam-number");

describe("Roman Numbers", () => {
  test("return cero when it isn't pass an number", () => {
    //Arrange
    const noNumber = 0;
    const result = 0;

    //Act
    const aIsNotANumber = convertNumberToRoman(noNumber);

    //Assert
    expect(aIsNotANumber).toBe(result);
  });

  test("return roman number I when it pass the arabic number 1", () => {
    //Arrange
    const number = 1;
    const result = "I";

    //Act
    const romanNumber = convertNumberToRoman(number);

    //Assert
    expect(romanNumber).toBe(result);
  });

  test("return roman number II when it pass the arabic number 2", () => {
    //Arrange
    const number = 2;
    const result = "II";

    //Act
    const romanNumber = convertNumberToRoman(number);

    //Assert
    expect(romanNumber).toBe(result);
  });

  test("return romam number V when it pass the arabic number 5", () => {
    //Arange
    const number = 5;
    const result = "V";

    //Act
    const romanNumber = convertNumberToRoman(number);

    //Assert
    expect(romanNumber).toBe(result);
  });

  test("return romam number VI when it pass the arabic number 6", () => {
    //Arange
    const number = 6;
    const result = "VI";

    //Act
    const romanNumber = convertNumberToRoman(number);

    //Assert
    expect(romanNumber).toBe(result);
  });

  test("return romam number IV when it pass the arabic number 4", () => {
    //Arange
    const number = 4;
    const result = "IV";

    //Act
    const romanNumber = convertNumberToRoman(number);

    //Assert
    expect(romanNumber).toBe(result);
  });

  test("return romam number when it pass the arabic number 2000", () => {
    //Arange
    const number = 2000;
    const result = "MM";

    //Act
    const romanNumber = convertNumberToRoman(number);

    //Assert
    expect(romanNumber).toBe(result);
  });

  test("return romam number when it pass the arabic number 40", () => {
    //Arange
    const number = 40;
    const result = "XL";

    //Act
    const romanNumber = convertNumberToRoman(number);

    //Assert
    expect(romanNumber).toBe(result);
  });
});

describe("Arabic Numbers", () => {
  test("return arabic number when it pass a roman number VI", () => {
    //Arange
    const number = "VI";
    const result = 6;

    //Act
    const romanNumber = convertArabicNumberToRomanNumber(number);

    //Assert
    expect(romanNumber).toBe(result);
  });

  test("return arabic number when it pass a roman number XXXIX", () => {
    //Arange
    const number = "XXXIX";
    const result = 39;

    //Act
    const romanNumber = convertArabicNumberToRomanNumber(number);

    //Assert
    expect(romanNumber).toBe(result);
  });

  test("return arabic number when it pass a roman number XIX", () => {
    //Arange
    const number = "XIX";
    const result = 19;

    //Act
    const romanNumber = convertArabicNumberToRomanNumber(number);

    //Assert
    expect(romanNumber).toBe(result);
  });
});

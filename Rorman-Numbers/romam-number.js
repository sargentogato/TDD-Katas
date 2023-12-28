const ROMANS_NUMBERS = [
  { value: 10000, roman: "X̅" },
  { value: 5000, roman: "V̅" },
  { value: 1000, roman: "M" },
  { value: 900, roman: "CM" },
  { value: 500, roman: "D" },
  { value: 400, roman: "CD" },
  { value: 100, roman: "C" },
  { value: 90, roman: "XC" },
  { value: 40, roman: "XL" },
  { value: 50, roman: "L" },
  { value: 10, roman: "X" },
  { value: 9, roman: "IX" },
  { value: 5, roman: "V" },
  { value: 4, roman: "IV" },
  { value: 1, roman: "I" },
];

const convertNumberToRoman = (number) => {
  if (number === 0) return 0;

  let numberRoman = "";
  if (typeof number === "number") {
    for (const num of ROMANS_NUMBERS) {
      while (number >= num.value) {
        numberRoman += num.roman;
        number -= num.value;
      }
    }
  }
  return numberRoman;
};

const convertArabicNumberToRomanNumber = (number) => {
  let arabicNumber = 0;
  number = number.split("").reverse().join("");

  for (const letter of number) {
    for (const iterator of ROMANS_NUMBERS) {
      if (iterator.roman === letter) {
        let maxUnitiValueMinesOne = parseInt(iterator.value) * 3 - 1;
        if (arabicNumber > maxUnitiValueMinesOne) {
          arabicNumber -= parseInt(iterator.value);
        } else {
          arabicNumber += parseInt(iterator.value);
        }
      }
    }
  }
  return arabicNumber;
};

module.exports = { convertNumberToRoman, convertArabicNumberToRomanNumber };

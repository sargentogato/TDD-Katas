const FIZZ_NUMBER = 3;
const BUZZ_NUMBER = 5;
const fizz = "Fizz";
const buzz = "Buzz";

class FizzBuzzNumber {
  constructor(value) {
    this.number = value;
  }

  print() {
    let result = this.number;

    if (this.isFizzNumber(this.number)) result = fizz;
    if (this.isBuzzNumber(this.number)) result = buzz;
    if (this.isFizzBuzzNumber(this.number)) result = fizz + buzz;

    return result;
  }

  isFizzNumber(value) {
    if (
      value % FIZZ_NUMBER === 0 ||
      this.includeFizzOrBuzzNumber(value, FIZZ_NUMBER)
    ) {
      return true;
    }
  }

  isBuzzNumber(value) {
    if (
      value % BUZZ_NUMBER === 0 ||
      this.includeFizzOrBuzzNumber(value, BUZZ_NUMBER)
    ) {
      return true;
    }
  }

  isFizzBuzzNumber(value) {
    if (value % FIZZ_NUMBER === 0 && value % BUZZ_NUMBER === 0) {
      return true;
    }
  }

  includeFizzOrBuzzNumber(value, fizzOrBuzzNumber) {
    const number = String(value).split("");
    const checkNumber = number.includes(String(fizzOrBuzzNumber));

    return checkNumber;
  }
}

function fizzBuzz() {
  let acumulador = [];
  for (let i = 1; i <= 100; i++) {
    const number = new FizzBuzzNumber(i);

    acumulador.push(number.print());
  }
  return acumulador;
}

module.exports = { FizzBuzzNumber, fizzBuzz };

const PRICE_OF_ONE_BOOK = 8;
const DISCOUNT = {
  2: 0.95,
  3: 0.9,
  4: 0.8,
  5: 0.75,
  6: 0.6,
  7: 0.5,
};

class PotterBooks {
  constructor(books) {
    this.books = books;
    this.booksGroupe = [];
    this.counter = 0;
  }

  calculatePrice() {
    let groupe = null;

    //Clausula de guarda
    if (this.books.length > 0) {
      groupe = new Set(this.books);
      this.addToBooksGroupe(groupe);
    }

    return this.totalPrice();
  }

  addToBooksGroupe(groupe) {
    const setToArray = Array.from(groupe);
    const tempGroupe = [];
    for (const element of setToArray) {
      tempGroupe.push(element);
    }

    this.booksGroupe.push(tempGroupe);
    this.cleanBooks();
  }

  cleanBooks() {
    for (const element of this.booksGroupe[this.counter]) {
      const indexOfBooksGroupe = this.books.indexOf(element);
      this.books.splice(indexOfBooksGroupe, 1);
    }

    this.counter++;
    this.calculatePrice();
  }

  totalPrice() {
    const totalPrice = this.booksGroupe.reduce((accumulator, currentValue) => {
      let numberBooksGroupe = currentValue.length;
      let total = 0;
      if (numberBooksGroupe > 1) {
        const subTotal = numberBooksGroupe * PRICE_OF_ONE_BOOK;
        total = subTotal * DISCOUNT[numberBooksGroupe];
      } else {
        total = numberBooksGroupe * PRICE_OF_ONE_BOOK;
      }

      return accumulator + total;
    }, 0);

    //Corrección del precio para que devuelva sólo un decimal
    return Number(totalPrice.toFixed(1));
  }
}

module.exports = PotterBooks;

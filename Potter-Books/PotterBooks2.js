const PRICE_OF_ONE_BOOK = 8;
const DISCOUNT = {
  2: 0.95,
  3: 0.9,
  4: 0.8,
  5: 0.75,
  6: 0.6,
  7: 0.5,
};

const calculatePrice = (books) => {
  /* Clausula de guarda */
  if (books.length === 1) return PRICE_OF_ONE_BOOK;

  /* Copia del array original */
  const totalBooks = [...books];
  let totalPrice = 0;

  const differentBooks = getNonDuplicateBooks(books);

  if (differentBooks.length >= 2) {
    totalPrice += getPriceWithDiscount(differentBooks.length);
    deleteBooksFromTotalBooks(totalBooks, differentBooks);
  }

  if (totalBooks.length > 3 && totalBooks[1] !== totalBooks[2]) {
    const noDuplicatedBooks = getNonDuplicateBooks(totalBooks);
    totalPrice += getPriceWithDiscount(noDuplicatedBooks.length);
    deleteBooksFromTotalBooks(totalBooks, noDuplicatedBooks);
  }

  if (totalBooks.length > 1 && totalBooks[0] !== totalBooks[1]) {
    totalPrice += getPriceWithDiscount(totalBooks.length);
    return Number(totalPrice.toFixed(1));
  }

  return totalPrice + totalBooks.length * PRICE_OF_ONE_BOOK;
};

const getNonDuplicateBooks = (books) => {
  /* Destructuring del objeto new Set que se convierte en array */
  return [...new Set(books)];
};

const deleteBooksFromTotalBooks = (totalBooks, differentBooks) => {
  differentBooks.forEach((book) => {
    totalBooks.splice(totalBooks.indexOf(book), 1);
  });
};

const getPriceWithDiscount = (amountOfBooks) => {
  return amountOfBooks * PRICE_OF_ONE_BOOK * DISCOUNT[amountOfBooks];
};

module.exports = { calculatePrice };

const PRICE_UNIT = 8;
const NO_DISCOUNT = 1;
const DISCOUNT = {
  2: 0.95,
  3: 0.9,
  4: 0.8,
  5: 0.75,
  6: 0.6,
  7: 0.5,
};

const log = console.log;

const calculatePrice = (quantityOfbooks) => {
  if (quantityOfbooks.length === 0 || typeof quantityOfbooks[0] !== "number")
    return 0;
  if (quantityOfbooks.length === 1) return PRICE_UNIT;

  let result = 0;

  const noRepeatedBooks = [...new Set(quantityOfbooks)].length;
  result = PRICE_UNIT * noRepeatedBooks * DISCOUNT[noRepeatedBooks];

  if (quantityOfbooks.length !== noRepeatedBooks) {
    let individualBooks = quantityOfbooks.length - noRepeatedBooks;
    result += individualBooks * PRICE_UNIT;
  }

  return Number(result.toFixed(1));
};

/* ************************************************************************************************************************* */
const calculatePrice3 = (quantityOfbooks) => {
  //const quantityOfbooks = [1, 1, 2, 2];
  let arrayObjetos = [];

  // Crear un objeto para almacenar la cantidad de cada número
  let conteoNumeros = {};

  quantityOfbooks.forEach(function (numero) {
    if (!conteoNumeros[numero]) {
      conteoNumeros[numero] = 1;
      arrayObjetos.push({
        numero: parseInt(numero),
        cantidad: 1,
      });
    } else {
      conteoNumeros[numero]++;
      arrayObjetos[numero - 1].cantidad = conteoNumeros[numero];
    }
  });

  // Construir el array de arrays
  let resultado = [];
  arrayObjetos.forEach(function (objeto) {
    for (var i = 0; i < objeto.cantidad; i++) {
      if (!resultado[i]) {
        resultado[i] = [];
      }
      resultado[i].push(objeto.numero);
    }
  });

  const totalPrice = resultado.reduce((accumulator, currentBook) => {
    const bookQuantity = currentBook.length;
    return (
      accumulator +
      bookQuantity *
        PRICE_UNIT *
        (bookQuantity > 1 ? DISCOUNT[bookQuantity] : NO_DISCOUNT)
    );
  }, 0);

  return totalPrice;
};

/* ****************************************************************************************************************************** */

const calculatePrice4 = (quantityOfbooks) => {
  if (quantityOfbooks.length === 0 || typeof quantityOfbooks[0] !== "number")
    return 0;

  const copyQuantityOfBooks = [...quantityOfbooks];
  const tempShoppingBasket = [];

  while (copyQuantityOfBooks.length > 0) {
    const uniqueBookGroupe = [...new Set(copyQuantityOfBooks)];
    tempShoppingBasket.push(uniqueBookGroupe);

    uniqueBookGroupe.forEach((book) => {
      const bookToRemove = copyQuantityOfBooks.indexOf(book);
      copyQuantityOfBooks.splice(bookToRemove, 1);
    });
  }

  const result = tempShoppingBasket.reduce(
    (accumulator, currentGroupeOfBooks) => {
      const bookQuantity = currentGroupeOfBooks.length;
      return (
        accumulator +
        bookQuantity *
          PRICE_UNIT *
          (bookQuantity > 1 ? DISCOUNT[bookQuantity] : NO_DISCOUNT)
      );
    },
    0
  );
  return result;
};

/* **************************************************************************************************************************** */

module.exports = calculatePrice4;

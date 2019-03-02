const randoNumber = require("random-number");

function randonItem(array) {
  const randomIndex = randoNumber({
    min: 0,
    max: array.length - 1,
    integer: true
  });
  return array[randomIndex];
}

module.exports = randonItem;

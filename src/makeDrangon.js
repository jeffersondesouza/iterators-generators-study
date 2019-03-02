const randonItem = require("./random-item");

module.exports = () => {
  const dragonSize = ["big", "mediun", "small"];
  const dragonAbilities = ["fore", "ice", "lightning"];
  return `${randonItem(dragonSize)} ${randonItem(dragonAbilities)} Dragon`;
};

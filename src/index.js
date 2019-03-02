const makeDragon = require("./makeDrangon");

/* const dragonArmy = {
  [Symbol.iterator]: () => {
    return {
      next: () => {
        if (Math.random() > 0.3) {
          return {
            done: false,
            value: makeDragon()
          };
        }
        return {
          done: true
        };
      }
    };
  }
}; */

const nextDragon = () => ({
  done: false,
  value: makeDragon()
});

const done = () => ({
  done: true
});

const dragonArmy = {
  [Symbol.iterator]: () => ({
    next: () => (Math.random() > 0.3 ? nextDragon() : done())
  })
};

console.log("ARMY");

const interator = dragonArmy[Symbol.iterator]();
console.log(interator.next());

for (const dragon of dragonArmy) {
  console.log(dragon);
}

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
}; 
*/


/* 
const dragonArmy = {
  [Symbol.iterator]: function*() {
    while(true){
      if (Math.random() < 0.3) {
        return;
      }
      yield makeDragon();
    }
  }
};

 */

const dragonArmy = (function*() {
  while (true) {
    if (Math.random() < 0.3) {
      return;
    }
    yield makeDragon();
  }
})();

function* someDragos(){
  yield makeDragon();
  yield makeDragon();
  yield makeDragon();
  if(Math.random() > 0.3){
    yield makeDragon();
  }
}

const iterator = someDragos();

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log('---');


for (const dragon of dragonArmy) {
  console.log(dragon);
}

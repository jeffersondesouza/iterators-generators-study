const makeDrangon = require('./makeDrangon');

function* someDragons() {
  yield makeDrangon();
  yield makeDrangon();
  yield makeDrangon();

  if (Math.random() < 0.5) return;

  yield makeDrangon();
  return makeDrangon();
}


function someDragons2() {
  let iterations = -1;

  const intertor = {
    next: () => {
      iterations++;
      if (iterations === 0) {
        return { value: 'flu', done: false }
      }
      if (iterations === 1) {
        return { value: 'mark', done: false }
      }

      if (iterations === 2) {
        if (Math.random() < 0.5) {
          return { value: 'hardy', done: false }
        };
      }
      
      return {
        done: true
      }

    }
  }


  return intertor;
}

const iterator1 = someDragons2();
console.log('next 1: ', iterator1.next());
console.log('next 2: ', iterator1.next());
console.log('next 3: ', iterator1.next());
console.log('next 4: ', iterator1.next());
console.log('next 5: ', iterator1.next());




const dragonArmy = {
  [Symbol.iterator]: someDragons
  /*   [Symbol.iterator]: () => {
      return {
        next: () => {
          const enoughDragons = Math.random() > 0.75;
  
          if (!enoughDragons) {
            return {
              value: makeDrangon(),
              done: false
            }
          }
  
          return {
            done: true
          }
  
        }
      }
    } */
};





/* for (const dragon of dragonArmy) {
  console.log(dragon);
}
 */

/*
part 1
const dragons = ['cool dragon', 'angry dragon', 'nasty dragon'];

const iterator = dragons[Symbol.iterator]();

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

for (const dragon of dragons) {
  console.log(dragon);
}
 */


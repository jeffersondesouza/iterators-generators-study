
const dragons = [
  'cool dragon',
  'andry drgon',
  'nasty dragon',
  'nasty dragon 1',
]

const interator = dragons[Symbol.iterator]();
console.log(interator.next());
console.log(interator.next());
console.log(interator.next());
console.log(interator.next());


for (const dragon of interator){
  console.log(dragon);
}

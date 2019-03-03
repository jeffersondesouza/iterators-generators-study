const createStore = require("./fake-store-sync");
const createStoreAsync = require("./fake-store-async");

const store = createStoreAsync();

/* const customers = function*() {
  let i = 1;
  while (true) {
    const customer = store.get("customer", i);
    if (!customer) return;
    yield { ...customer, foods: store.get("food", i) };
    i++;
  }
};
 */
/* 
const customers = {
  [Symbol.iterator]: function() {
    let i = 0;

    return {
      next: function() {
        i++;
        const customer = store.get("customer", i);
        if (!customer) {
          return { done: true };
        }
        return {
          value : { ...customer, food: store.get("food", i)},
          done: false,
        }
      }
    };
  }
};
 */

const customers = {
  [Symbol.iterator]: function() {
    let i = 0;

    return {
      next: async function() {
        i++;
        const customer = await store.get("customer", i);
        if (!customer) {
          return { done: true };
        }
        const foods = await store.get("food", i);

        return {
          value: { ...customer, foods },
          done: false
        };
      }
    };
  }
};

console.log();

(async function() {
  try {
    const iterator = customers[Symbol.iterator]();
    const obj1 = await iterator.next();
    const obj2 = await iterator.next();
    const obj3 = await iterator.next();
    const obj4 = await iterator.next();
    console.log('obj1:', obj1.value)
    console.log('obj1:', obj2.value)
    console.log('obj1:', obj3.value)
    console.log('obj1:', obj4.value)
    
  } catch (e) {}
})();

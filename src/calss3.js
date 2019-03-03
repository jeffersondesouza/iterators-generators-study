const createStore = require("./fake-store-sync");
const createStoreAsync = require("./fake-store-async");

const store = createStore();

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

const customers = {
  [Symbol.iterator]: function() {
    let i = 0;
  }
};

for (const iterator of customers()) {
  console.log(iterator);
}

const createStore = require('./fake-store-async');

const store = createStore();

const customers = {
  [Symbol.iterator]: function () {
    let i = 0;
    return {
      next: async function () {
        i++;
        const customer = await store.get('customer', i);

        if (!customer) {
          return { done: true };
        }

        customer.foods = await store.get('food', i);
        return {
          valeu: customer,
          done: false
        }
      }
    }
  }
}

  (async function () {
    const iterator = customers[Symbol.iterator]();

    /*
  
      for await (const customer of customers) {
        console.log(customer);
  
      }
      */
  })();

/*
for (const customer of customers) {
  console.log(customer);

} */
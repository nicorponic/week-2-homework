//const item = require("./items");

class ShoppingCart {
  constructor() {
    this.items = [];
  }

  addItem(itemName, quantity, price) {
    const item = { name: itemName, quantity: quantity, pricePerUnit: price };
    this.items.push(item);
  }

  getItems() {
    //let objClone = { ...this.items };
    return this.items;
  }

  clear() {
    this.items = [];
  }

  total() {
    const clonedItems = [...this.items];
    return clonedItems.reduce(
      (sum, item) => sum + item.pricePerUnit * item.quantity,
      0
    );
  }
}

module.exports = ShoppingCart;

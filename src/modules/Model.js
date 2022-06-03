export default class {
  constructor() {
    this.items = JSON.parse(localStorage.getItem('todoItems'));
  }

  updateLocalStorage(items) {
    if (items === null) {
      this.items = [];
      localStorage.setItem('todoItems', JSON.stringify(this.items));
    } else {
      this.items = items;
      localStorage.setItem('todoItems', JSON.stringify(this.items));
    }
  }

  getItems() {
    this.updateLocalStorage(this.items);
    return this.items;
  }

  completedItem(index, bool, populateItems) {
    this.items[index].completed = bool;
    this.updateLocalStorage(this.items);
    populateItems();
  }

  addItem(inputValue, populateItems) {
    const item = {
      description: inputValue,
      completed: false,
      index: this.items.length,
    };

    this.items.push(item);
    this.updateLocalStorage(this.items);
    populateItems();
  }

  updateItem(value, index) {
    this.items[index].description = value;
    this.updateLocalStorage(this.items);
  }

  deleteItem(index, populateItems) {
    this.items.splice(index, 1);
    this.items.map((item, i) => {
      item.index = i;
      return item.index;
    });

    this.updateLocalStorage(this.items);
    populateItems();
  }
}
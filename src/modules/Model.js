export default class {
  constructor() {
    this.items = JSON.parse(localStorage.getItem('todoItems'));
  }

  _updateLocalStorage(items){
    if (items === null) {
      this.items = [];
      localStorage.setItem('todoItems', JSON.stringify(this.items));
    } else {
      this.items = items;
      localStorage.setItem('todoItems', JSON.stringify(this.items));
    }
  }

  getItems() {
    this._updateLocalStorage(this.items);
    return this.items;
  }

  addItem(inputValue, populateItem){
    const item = {
      description: inputValue,
      completed: false,
      index: this.items.length-1,
    }

    this.items.push(item);
    this._updateLocalStorage(this.items);
    populateItem();
  }
}
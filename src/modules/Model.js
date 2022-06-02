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

  addItem(inputValue, populateItems){
    const item = {
      description: inputValue,
      completed: false,
      index: this.items.length,
    }

    //this.items.sort((a, b) => b.index - a.index);
    this.items.push(item);
    this._updateLocalStorage(this.items);
    populateItems();
  }

  updateItem(value, index){
    this.items[index].description = value;
    this._updateLocalStorage(this.items);
  }

  deleteItem(index, populateItems){
    this.items.splice(index, 1);
    this.items.map((item, i)=> item.index = i );
    this._updateLocalStorage(this.items);
    populateItems();
  }
}
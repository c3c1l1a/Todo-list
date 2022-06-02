export default class {
  constructor(model, view) {
    this.model = model;
    this.view = view;
  }


  populateItems() {
    const items = this.model.getItems();

    items.sort((a, b) => b.index - a.index);

    this.view.refreshDOM();
    items.map((item) => this.view.generateTemplate(item));
  }

  _handleNewItem(inputValue){
    this.model.addItem(inputValue, this.populateItems.bind(this));
  }

  addNewItem(){
    this.view.submitNewItem(this._handleNewItem.bind(this));
  }
}
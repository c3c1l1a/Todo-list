export default class {
  constructor(model, view) {
    this.model = model;
    this.view = view;
  }


  populateItems() {
    const items = this.model.getItems();

    this.view.refreshDOM();
    const updateDesriptionHander = this.handleDescriptionUpdate.bind(this);
    items.slice(0).reverse().map((item) => this.view.generateTemplate(item, updateDesriptionHander));
  }

  _handleNewItem(inputValue){
    this.model.addItem(inputValue, this.populateItems.bind(this));
  }

  handleDescriptionUpdate(value, index){
    this.model.updateItem(value, index);
  }

  addNewItem(){
    this.view.submitNewItem(this._handleNewItem.bind(this));
  }
}
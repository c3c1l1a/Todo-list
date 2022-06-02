export default class {
  constructor(model, view) {
    this.model = model;
    this.view = view;
  }

  populateItems() {
    const items = this.model.getItems();

    this.view.refreshDOM();
    const updateDesriptionHander = this.handleDescriptionUpdate.bind(this);
    const deleteItemHandler = this.handleDeleteItem.bind(this);

    const eventHandlers = [updateDesriptionHander, deleteItemHandler]
    items.slice(0).reverse().map((item) => this.view.generateTemplate(item, eventHandlers));
  }

  handleNewItem(inputValue){
    this.model.addItem(inputValue, this.populateItems.bind(this));
  }

  handleDescriptionUpdate(value, index){
    this.model.updateItem(value, index);
  }

  handleDeleteItem(index){
    this.model.deleteItem(index, this.populateItems.bind(this));
  }

  addNewItem(){
    this.view.submitNewItem(this.handleNewItem.bind(this));
  }
}
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
    const markAsComplete = this.handleMarkAsComplete.bind(this);

    const eventHandlers = [updateDesriptionHander, deleteItemHandler, markAsComplete];
    items.slice(0).reverse().map((item) => this.view.generateTemplate(item, eventHandlers));
  }

  handleMarkAsComplete(index, bool) {
    this.model.completedItem(index, bool, this.populateItems.bind(this));
  }

  handleNewItem(inputValue) {
    this.model.addItem(inputValue, this.populateItems.bind(this));
  }

  handleDescriptionUpdate(value, index) {
    this.model.updateItem(value, index);
  }

  handleDeleteItem(index) {
    this.model.deleteItem(index, this.populateItems.bind(this));
  }

  handleClearAllCompleted() {
    this.model.clearAllCompleted(this.populateItems.bind(this));
  }

  addNewItem() {
    this.view.submitNewItem(this.handleNewItem.bind(this));
  }

  clearAllCompleted() {
    this.view.clearAllCompleted(this.handleClearAllCompleted.bind(this));
  }
}
export default class {
  constructor() {
    this.itemTemplate = document.querySelector('.todo-item-template');
    this.todoItems = document.querySelector('.todo-items');
    this.input = document.querySelector('.new-item');

  }

  refreshDOM(){
    if (this.todoItems.hasChildNodes()){
      this.todoItems.textContent = '';
    }
  }

  generateTemplate(itemData) {

    const itemTag = this.itemTemplate.content.firstElementChild.cloneNode(true);

    const itemDescription = itemTag.querySelector('p');
    itemDescription.textContent = itemData.description;

    this.todoItems.appendChild(itemTag);
  }

  submitNewItem(handleNewItem){
    this.input.addEventListener('keypress', (e) => {
      if (e.key === 'Enter'){
        e.preventDefault();
        handleNewItem(e.target.value);
        e.target.value = '';
      }
    });

  }
}
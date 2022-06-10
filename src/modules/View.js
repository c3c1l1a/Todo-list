export default class {
  constructor() {
    this.itemTemplate = document.querySelector('.todo-item-template');
    this.todoItems = document.querySelector('.todo-items');
    this.input = document.querySelector('.new-item');
    this.clearAllButton = document.querySelector('.todo-clear-completed');
  }

  refreshDOM() {
    if (this.todoItems.hasChildNodes()) {
      this.todoItems.textContent = '';
    }
  }

  clearAllCompleted(handleClearAll) {
    this.clearAllButton.addEventListener('click', () => {
      handleClearAll();
    });
  }

  generateTemplate(itemData, eventHandlers) {
    const [updateDesciption, deleteItem, markAsComplete] = eventHandlers;
    const itemTag = this.itemTemplate.content.firstElementChild.cloneNode(true);

    const checkbox = itemTag.querySelector('.checkbox');
    checkbox.checked = itemData.completed;

    checkbox.addEventListener('click', (e) => {
      markAsComplete(itemData.index, e.target.checked);
    });

    const itemDescription = itemTag.querySelector('.item-description');
    itemDescription.setAttribute('id', itemData.index);

    itemDescription.value = itemData.description;
    if (itemData.completed) {
      itemDescription.classList.add('strikethrough');
    } else {
      itemDescription.classList.remove('strikethrough');
    }

    itemDescription.addEventListener('input', (e) => {
      e.preventDefault();
      console.log(e.target.value);
      updateDesciption(e.target.value, itemData.index);
      itemTag.classList.remove('item-edit');
    });

    const bin = itemTag.querySelector('.bin');
    const more = itemTag.querySelector('.more');
    bin.addEventListener('click', () => {
      deleteItem(itemData.index);
    });

    itemTag.addEventListener('mouseover', () => {
      bin.style.display = 'block';
      more.style.display = 'none';
      itemTag.classList.add('item-edit');
    });

    itemTag.addEventListener('mouseout', () => {
      bin.style.display = 'none';
      more.style.display = 'block';
      itemTag.classList.remove('item-edit');
    });

    this.todoItems.appendChild(itemTag);
  }

  submitNewItem(handleNewItem) {
    this.input.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        if (e.target.value.length > 0) handleNewItem(e.target.value);
        e.target.value = '';
      }
    });
  }
}
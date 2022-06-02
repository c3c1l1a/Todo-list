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

  generateTemplate(itemData, eventHandlers) {
    const [updateDesciption, deleteItem] = eventHandlers;
    const itemTag = this.itemTemplate.content.firstElementChild.cloneNode(true);

    const itemDescription = itemTag.querySelector('.item-description');
    itemDescription.value = itemData.description;

    const bin = itemTag.querySelector('.bin');
    const more = itemTag.querySelector('.more');

    bin.addEventListener('click', (e)=>{
      deleteItem(itemData.index);
    });

    itemTag.addEventListener('click', (e) => {
      e.preventDefault();
      itemTag.classList.add('item-edit');
      bin.style.display = 'block';
      more.style.display = 'none';
      
      if (e.target.classList.contains('item-description')){
        e.target.addEventListener('input', (e)=> {
          e.preventDefault();
          updateDesciption(e.target.value, itemData.index);
          itemTag.classList.remove('item-edit');
        });
      }
    });

    itemTag.addEventListener('mouseover', (e)=>{
      bin.style.display = 'block';
      more.style.display = 'none';
    });

    itemTag.addEventListener('mouseout', (e)=>{
      bin.style.display = 'none';
      more.style.display = 'block';
    });
    
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
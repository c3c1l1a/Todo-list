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

  generateTemplate(itemData, updateDesciption) {

    console.log(itemData.index);
    const itemTag = this.itemTemplate.content.firstElementChild.cloneNode(true);

    const itemDescription = itemTag.querySelector('.item-description');
    itemDescription.value = itemData.description;

    itemDescription.addEventListener('focus', (e)=>{
      e.preventDefault();
      e.target.parentNode.classList.add('item-desciption-focus');
      e.target.parentNode.querySelector('.more').style.display = 'none';
      e.target.parentNode.querySelector('.bin').style.display = 'block';
    });

    itemDescription.addEventListener('input', (e)=>{
      e.preventDefault();
      e.target.parentNode.classList.remove('item-desciption-focus');
      e.target.parentNode.querySelector('.more').style.display = 'block';
      e.target.parentNode.querySelector('.bin').style.display = 'none';

      
      updateDesciption(e.target.value, itemData.index);
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
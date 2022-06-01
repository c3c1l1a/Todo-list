export default class {
	constructor() {
		this.itemTemplate = document.querySelector('.todo-item-template');
		this.todoItems = document.querySelector('.todo-items');
	}
	generateTemplate(itemData){
		const itemTag = this.itemTemplate.content.firstElementChild.cloneNode(true);

		const itemDescription = itemTag.querySelector('p');
		itemDescription.textContent = itemData.description;

		this.todoItems.appendChild(itemTag)
	}
}
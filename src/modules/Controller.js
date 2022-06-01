export default class {
	constructor(model, view){
		this.model = model;
		this.view = view;
	}

	populateItems(){
		const items = this.model.getItems();
		this.model.items.sort((a, b) => {
			console.log(a.index, b.index, a.index - b.index);
			return b.index - a.index;
		});


		items.map((item) => {
			this.view.generateTemplate(item);
		}) 
	}
}
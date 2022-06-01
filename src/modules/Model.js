export default class {
	constructor(){
		this.items = [
			{
				description: 'Wash the dishes',
				completed: false,
				index: 0
			},
			{
				description: 'Write my daily goals',
				completed: false,
				index: 1
			},
			{
				description: 'Complete my project for the day',
				completed: false,
				index: 2
			}, 
			{
				description: 'Do some yoga',
				completed: false,
				index: 3
			}
		]
	}

	getItems() {
		return this.items;
	}
}
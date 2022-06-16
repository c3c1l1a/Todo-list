
/**
 * @jest-environment jsdom
 */


document.body.innerHTML = `
    <div class="todo-container">
        <div class="todo-header">
            <p>Today's Todo list </p>
            <img class="icon" src="./assets/icons/autorenew_black.svg" alt="Refresh list icon">  
        </div>
        <div class="todo-new-item">
            <input class="new-item" type="text" placeholder="Add a new item.." name="new-item">
            <img class="icon" src="./assets/icons/enter.svg" alt="Enter key icon">
        </div>
        <div class="todo-items">
            <template class="todo-item-template">
                <div class="todo-item">
                    <input class="checkbox" type="checkbox">
                    <input class="item-description" name="item-description">
                    <img class="icon bin" src="./assets/icons/bin.svg" alt="Show more item options">
                    <img class="icon more" src="./assets/icons/more.svg" alt="Show more item options">
                </div>  
            </template>
        </div>
        <div class="todo-clear-completed">
            <p>Clear all completed</p>
        </div>
    </div>
`;

import Model from '../modules/Model.js';
import Controller from '../modules/Controller.js';
import View from '../modules/View.js';

const model = new Model();
const view = new View();
const controller = new Controller(model, view);

describe('Add todo', ()=> {
	test('Test if items are added to local storage', ()=> {
		model.addItem('item1', jest.fn());
        model.addItem('item2', jest.fn());
		controller.populateItems();

		expect(model.getItems()).toEqual(JSON.parse(localStorage.getItem('todoItems')));
		expect(document.querySelector('.todo-items').hasChildNodes()).toBe(true);
		expect(document.querySelectorAll('.todo-item').length).toBe(2);

	});
});
/**
 * @jest-environment jsdom
 */
import Model from '../modules/Model.js';
import Controller from '../modules/Controller.js';
import View from '../modules/View.js';

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

const model = new Model();
const view = new View();
const controller = new Controller(model, view);

describe('Add todo', () => {
  test('Test if items are added to local storage', () => {
    model.addItem('item1', jest.fn());
    model.addItem('item2', jest.fn());
    controller.populateItems();

    expect(model.getItems()).toEqual(JSON.parse(localStorage.getItem('todoItems')));
    expect(document.querySelector('.todo-items').hasChildNodes()).toBe(true);
    expect(document.querySelectorAll('.todo-item').length).toBe(2);
  });
});

describe('remove todo', () => {
  test('Test if items are removed from local storage.', () => {
    model.deleteItem(1, jest.fn());
    controller.populateItems();

    expect(model.getItems()).toEqual(JSON.parse(localStorage.getItem('todoItems')));
    expect(document.querySelector('.todo-items').hasChildNodes()).toBe(true);
    expect(document.querySelectorAll('.todo-item').length).toBe(1);
  });
});

describe('Edit todo', () => {
  test('Test if items are edited from local storage.', () => {
    controller.handleDescriptionUpdate('java', 0);
    controller.populateItems();

    expect(model.getItems()[0].description).toEqual(JSON.parse(localStorage.getItem('todoItems'))[0].description);
    expect(document.querySelector('.todo-items').hasChildNodes()).toBe(true);
  });
});

describe('Update Todo', () => {
  test('Test if Items are Updated to the local storage. ', () => {
    controller.handleMarkAsComplete(0, true);
    controller.populateItems();

    expect(model.getItems()[0].completed).toEqual(JSON.parse(localStorage.getItem('todoItems'))[0].completed);
    expect(document.querySelector('.checkbox').checked).toBe(true);
  });
});

describe('Clear all complete', ()=>{
    test("Test if all checked as complete are removed", ()=> {
        controller.handleClearAllCompleted();
        controller.populateItems();

        expect(model.getItems().length).toBe(0);
        expect(model.getItems().length).toEqual(JSON.parse(localStorage.getItem('todoItems')).length);
        expect(document.querySelector('.todo-items').hasChildNodes()).toBe(false);
    });
});
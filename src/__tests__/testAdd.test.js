/* eslint-disable max-len */
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

let model; let view; let controller; let KEY; let
  VALUE;
beforeAll(() => {
  model = new Model();
  view = new View();

  controller = new Controller(model, view);
  KEY = 'todoItems';
  VALUE = '[]';
});

describe('App test', () => {
  describe('Setup localStorage', () => {
    beforeEach(() => {
      // to fully reset the state between tests, clear the storage
      localStorage.clear();
      // and reset all mocks
      jest.clearAllMocks();
      localStorage.setItem.mockClear();
    });

    it('test that it creates empty model.items instance array', () => {
      model.updateLocalStorage([]);
      expect(model.items).toEqual([]);
    });

    it('test that model.items can be updated with items', () => {
      model.updateLocalStorage([]);
      expect(localStorage.setItem).toHaveBeenLastCalledWith(KEY, VALUE);
    });
  });

  describe('Add an item', () => {
    beforeEach(() => {
      localStorage.clear();
      jest.clearAllMocks();
      localStorage.setItem.mockClear();
    });

    it('test that model.items can be updated with items', () => {
      model.addItem('item1', jest.fn());
      model.addItem('item2', jest.fn());
      controller.populateItems();

      expect(document.querySelectorAll('.todo-item').length).toBe(2);
      expect(model.items.length).toBe(2);
      expect(model.items).toEqual([{
        description: 'item1',
        completed: false,
        index: 0,
      }, {
        description: 'item2',
        completed: false,
        index: 1,
      },
      ]);
    });
  });

  describe('Remove an item', () => {
    beforeEach(() => {
      localStorage.clear();
      jest.clearAllMocks();
      localStorage.setItem.mockClear();
    });

    it('test that model.items can be remove an item', () => {
      model.deleteItem(1, jest.fn());
      controller.populateItems();

      expect(document.querySelectorAll('.todo-item').length).toBe(1);
      expect(model.items.length).toBe(1);
      expect(model.items).toEqual([{
        description: 'item1',
        completed: false,
        index: 0,
      },
      ]);
    });
  });
});
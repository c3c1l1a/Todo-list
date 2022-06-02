import './css/style.css';
import './index.html';

import Model from './modules/Model.js';
import View from './modules/View.js';
import Controller from './modules/Controller.js';

window.onload = () => {
  const controller = new Controller(new Model(), new View());
  controller.populateItems();
  controller.addNewItem();
};

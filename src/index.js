import _ from 'lodash';
import './style.css';

function component() {
  const element = document.createElement('div');

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = _.join(['Hello', 'webpak'], ' ');

  return element;
}

document.body.appendChild(component());
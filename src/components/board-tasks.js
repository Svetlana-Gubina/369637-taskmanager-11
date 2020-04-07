import AbstractComponent from './abstractComponent.js';

export default class BoardTasks extends AbstractComponent {
  getTemplate() {
    return `<div class="board__tasks"></div>`;
  }
}

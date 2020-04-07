import AbstractComponent from './abstractComponent.js';

export default class FilterSection extends AbstractComponent {
  getTemplate() {
    return `<section class="main__filter filter container"></section>`;
  }
}

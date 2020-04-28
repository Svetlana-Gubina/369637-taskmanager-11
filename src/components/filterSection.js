import {createFilterMarkup} from "./filters.js";
import AbstractComponent from './abstract-component.js';

export default class FilterComponent extends AbstractComponent {
  constructor(filters) {
    super();
    this._filters = filters;
  }

  getTemplate() {
    const filtersMarkup = this._filters.map((it, i) => createFilterMarkup(it, i === 0)).join(`\n`);
    return `<section class="main__filter filter container">
      ${filtersMarkup}
    </section>`;
  }
}

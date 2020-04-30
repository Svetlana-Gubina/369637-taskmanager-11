import {createFilterMarkup} from "./filters.js";
import AbstractComponent from './abstract-component.js';

const FILTER_ID_PREFIX = `filter__`;

const getFilterNameById = (id) => {
  return id.substring(FILTER_ID_PREFIX.length);
};

export default class FilterComponent extends AbstractComponent {
  constructor(filters) {
    super();
    this._filters = filters;
  }

  getTemplate() {
    const filtersMarkup = this._filters.map((it) => createFilterMarkup(it, it.checked)).join(`\n`);
    return `<section class="main__filter filter container">
      ${filtersMarkup}
    </section>`;
  }

  setFilterChangeHandler(handler) {
    this.getElement().addEventListener(`change`, (evt) => {
      const filterName = getFilterNameById(evt.target.id);
      handler(filterName);
    });
  }
}

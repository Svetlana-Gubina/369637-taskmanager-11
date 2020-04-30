export default class Filters {
  constructor({all, overdue, today, favorites, repeating, tags, archive}) {
    this._all = all;
    this._overdue = overdue;
    this._today = today;
    this._favorites = favorites;
    this._repeating = repeating;
    this._tags = tags;
    this._archive = archive;
    this._element = null;
  }

  getElement(container) {
    container.innerHTML = this.getTemplate();
  }

  getTemplate() {
    return `<input
    type="radio"
    id="filter__${this._all.title.toLowerCase()}"
    class="filter__input visually-hidden"
    name="filter"
    checked
  />
  <label for="filter__all" class="filter__label">
    ${this._all.title} <span class="filter__${this._all.title.toLowerCase()}-count">${this._all.count}</span></label
  >
  <input
    type="radio"
    id="filter__${this._overdue.title.toLowerCase()}"
    class="filter__input visually-hidden"
    name="filter"
    disabled
  />
  <label for="filter__overdue" class="filter__label"
    >${this._overdue.title} <span class="filter__${this._overdue.title.toLowerCase()}-count">${this._overdue.count}</span></label
  >
  <input
    type="radio"
    id="filter__${this._today.title.toLowerCase()}"
    class="filter__input visually-hidden"
    name="filter"
    disabled
  />
  <label for="filter__today" class="filter__label"
    >${this._today.title} <span class="filter__${this._today.title.toLowerCase()}-count">${this._today.count}</span></label
  >
  <input
    type="radio"
    id="filter__${this._favorites.title.toLowerCase()}"
    class="filter__input visually-hidden"
    name="filter"
  />
  <label for="filter__favorites" class="filter__label"
    >${this._favorites.title} <span class="filter__${this._favorites.title.toLowerCase()}-count">${this._favorites.count}</span></label
  >
  <input
    type="radio"
    id="filter__${this._repeating.title.toLowerCase()}"
    class="filter__input visually-hidden"
    name="filter"
  />
  <label for="filter__repeating" class="filter__label"
    >${this._repeating.title} <span class="filter__${this._repeating.title.toLowerCase()}-count">${this._repeating.count}</span></label
  >
  <input
    type="radio"
    id="filter__${this._tags.title.toLowerCase()}"
    class="filter__input visually-hidden"
    name="filter"
  />
  <label for="filter__tags" class="filter__label"
    >${this._tags.title} <span class="filter__${this._tags.title.toLowerCase()}-count">${this._tags.count}</span></label
  >
  <input
    type="radio"
    id="filter__${this._archive.title.toLowerCase()}"
    class="filter__input visually-hidden"
    name="filter"
  />
  <label for="filter__archive" class="filter__label"
    >${this._archive.title} <span class="filter__${this._archive.title.toLowerCase()}-count">${this._archive.count}</span></label
  >`;
  }
}
